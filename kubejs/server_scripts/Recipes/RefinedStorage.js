// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {

    event.remove({ output: 'refinedstorage:wireless_transmitter' })
    
    event.shaped(
        Item.of('refinedstorage:wireless_transmitter', 1), // arg 1: output
        [
          'qvq',
          'qmq', // arg 2: the shape (array of strings)
          'qcq'
        ],
        {
          q: 'refinedstorage:quartz_enriched_iron',
          v: 'botania:ender_air_bottle',
          m: 'refinedstorage:machine_casing',
          c: 'refinedstorage:advanced_processor',
        }
      )
  })