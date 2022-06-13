console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

const yearlyPlan = createPlan()
console.log(yearlyPlan)

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// const cornSeed = createCorn()
// console.log(cornSeed)


const useThesePlants = usePlants()
console.log(useThesePlants)

 
plantSeeds()
//console.log(newSeedsToPlant)



 const finalHarvestOfPlants = harvestPlants(useThesePlants)
 console.log(finalHarvestOfPlants) 

 const catalogFood = catalog(finalHarvestOfPlants)
// for (const FoodSelection of catalogFood) {console.log(FoodSelection)}

const parentHTMLElement = document.querySelector(".container")

parentHTMLElement.innerHTML = catalogFood
// import { createPotato } from "./seeds/potato.js"
//  const plantedSeeds = plantSeeds()
//  console.log(plantedSeeds)

 

 