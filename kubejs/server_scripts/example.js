// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!
  
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    event.shaped(
        Item.of('origins:orb_of_origin', 1), // arg 1: output
        [
          'ded',
          'ede', // arg 2: the shape (array of strings)
          'ded'
        ],
        {
          d: 'minecraft:diamond',
          e: 'minecraft:emerald'
        }
      )
    // Add shapeless crafting recipe for botania:red_string
    event.shapeless("botania:red_string", [
      ['2x #chipped:redstone_block'],
      ['2x minecraft:string'],
      ['2x botania:pixie_dust]'
    ]);
  
    console.log('Hello! The recipe event has fired!')
  })