// import { createAsparagus } from "./seeds/asparagus.js"
// import {plantSeeds} from "./tractor.js" 
// let newSeeds = plantSeeds()
let growingInTheField = []
export const addPlant = (seed) => { 
    if (Array.isArray(seed) === true) {
     growingInTheField.push(seed[0]) 
    growingInTheField.push(seed[1])
}
    else {
        growingInTheField.push(seed)}
    
}



export const usePlants = () => {
    let newPlants = growingInTheField
    //console.log(newPlants)
    return newPlants
}

// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.
// In the module, define and export a function named addPlant.
// The addPlant function must accept a seed object as input. The function will add the seed to the field (How do you add something to an array? Do you remember the method for it?).
// Define and export a function named usePlants that returns a copy of the array of plants.