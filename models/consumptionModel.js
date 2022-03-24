/**
 * 
 * @author Rares Liscan
 * 
 * Here is defined the model for the mongo consumption field
 * @param homeConsumption - a number in Watts Hour that defines the total consumption of the circuit at a given time
 * @param generatorConsumption - a number in Watts Hour that defines the current used from the one created by the generator
 * @param time - a date that defines the time at which the consumption has been recorded
 * @constant GENERATED_ELECTRICITY - the consumption field from the database was created by the generator
 * @constant PROVIDED_ELECTRICITY - the consumption field from the database was used from the provider
 * 
 */

import mongoose from "mongoose";

export const GENERATED_ELECTRICITY = 1;
export const PROVIDED_ELECTRICITY = 2;

const consumptionSchema = mongoose.Schema({
    homeConsumption: Number,//Watts Hour
    generatorConsumption: Number,
    type: Number,
    time: {
        type: Date,
        default: new Date(),
    }
})

const ConsumptionModel = mongoose.model("Consumption", consumptionSchema);
export default ConsumptionModel;