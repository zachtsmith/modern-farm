import { createPlan } from "./plan.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { addPlant } from "./field.js"

let newYearlyPlan = createPlan()


export const plantSeeds = () => {
    for (const plantsToBePlanted of newYearlyPlan) {
        for (const plants of plantsToBePlanted) {
            if (plants === "Asparagus") {
                addPlant(createAsparagus())
            }
            else if (plants === "Corn") {
                addPlant(createCorn())
            }
            else if (plants === "Potato") {
                addPlant(createPotato())
            }
            else if (plants === "Soybean") {
                addPlant(createSoybean())
            }
            else if (plants === "Sunflower") {
                addPlant(createSunflower())
            }
            else if (plants === "Wheat") {
                addPlant(createWheat())
            }
        }
    }
}






