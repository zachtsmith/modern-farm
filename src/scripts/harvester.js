



export const harvestPlants = (plantsArray) => {
    let outputOfPlants = []
    for (const harvestedPlants of plantsArray) {
        if (harvestedPlants.type === "Corn") {
            (harvestedPlants.output = harvestedPlants.output / 2)
            outputOfPlants.push(harvestedPlants)
        } else {
            for (let i=0; i < harvestedPlants.output; i++) { outputOfPlants.push(harvestedPlants)}
        }
    } return outputOfPlants
}

// In this module, define and export a harvestPlants function.
// The harvestPlants function must accept the plants array as input.
// The function will return an array of seed objects.
// Iterate the array of growing plants. On each plant, get the value of the output property.
// Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...