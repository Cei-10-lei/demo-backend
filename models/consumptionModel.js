/**
 * 
 * @author Rares Liscan
 * 
 * Here is defined the model for the mongo consumption field
 * @param consumption - a number in Watts Hour that defines the total consumption of the circuit at a given time
 * @param time - a date that defines the time at which the consumption has been recorded
 * 
 */

import mongoose from "mongoose";

const consumptionSchema = mongoose.Schema({
    consumption: Number,//Watts Hour
    time: {
        type: Date,
        default: new Date(),
    }
})

const ConsumptionModel = mongoose.model("Consumption", consumptionSchema);
export default ConsumptionModel;