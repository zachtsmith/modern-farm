
let allThePlants = []
export const addPlant = (seed) => { 
    
    allThePlants.push(seed)
    return allThePlants
}
//let plantAdded = addPLant()
//console.log(plantAdded) 

export const usePlants = () => {
    let newPlants = allThePlants
    console.log(newPlants)
    return newPlants
}

//finished off trying to test code lines 5 and 6 in the Tilling the Field section.
// Be aware that the instructions in line 6 are just making you aware of something upcoming. 