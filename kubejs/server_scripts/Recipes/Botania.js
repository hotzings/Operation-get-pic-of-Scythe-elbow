// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!
  
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    // Add shapeless crafting recipe for botania:red_string
    event.shapeless("botania:red_string", [
      ['2x #chipped:redstone_block'],
      ['2x minecraft:string'],
      ['2x botania:pixie_dust']
    ]);
  })