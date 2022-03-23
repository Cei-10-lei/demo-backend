/**
 * @author: Rares Liscan
 * 
 * In this module are defined all the functions that are manipulating the database. 
 * 
 * @function getAllFields - this function returns to the client all the recorded fields from the database
 * @function insertNewField - inserts a new field in the database
 */

import ConsumptionModel from "../models/consumptionModel.js";

export const getAllFields = async (req, res) => {
    try {
        const fields = await ConsumptionModel.find();

        res.send(fields);
    }
    catch(err) {
        console.error(err);
    }
}

export const insertNewField = async (req, res) => {
    const body = req.body;
    body.consumption = Number.parseFloat(body.consumption);
    const newField = new ConsumptionModel({
        ...body, 
        time: body.time !== undefined ? new Date() : body.time
    });
    console.log(newField);
    
    try {
        await newField.save();

        res.send(newField);
    }
    catch(error) {
        console.error(error);
    }
}


export const deleteAllFields = async (req, res) => {
    await ConsumptionModel.remove();

    res.send([]);
}