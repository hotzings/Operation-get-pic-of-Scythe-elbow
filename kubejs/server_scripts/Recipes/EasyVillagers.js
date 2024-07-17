ServerEvents.recipes(event => {

    event.remove({ output: 'easy_villagers:trader'})
    event.remove({ output: 'easy_villagers:auto_trader'})
    event.remove({ output: 'easy_villagers:farmer'})
    event.remove({ output: 'easy_villagers:breeder'})
    event.remove({ output: 'easy_villagers:converter'})
    event.remove({ output: 'easy_villagers:iron_farm'})
    event.remove({ output: 'easy_villagers:incubator'})
})