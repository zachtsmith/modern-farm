console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
const yearlyPlan = createPlan()
console.log(yearlyPlan)


import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus("Asparagus", 24, 4)
console.log(asparagusSeed)


import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn("Corn", 180, 6)
console.log(cornSeed)


import { addPlant, usePlants } from "./field.js"
 const usingPlants = usePlants()
 console.log(usingPlants)


 import { plantSeeds } from "./tractor.js"
import { createPotato } from "./seeds/potato.js"
 const plantedSeeds = plantSeeds()
 console.log(plantedSeeds)

 

 