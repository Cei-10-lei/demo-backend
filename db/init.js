/**
 * @author Rares Liscan
 * 
 * @function initMongoose - this function connects the app to the mongodb server. 
 * In case the server has to be changed, it is only required to change the url string
 */

import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/polihack-demo';

const initMongoose = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    catch (error) {
        console.error(error);
    }
};
export default initMongoose;