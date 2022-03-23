import express from 'express';
import consumption from './routes/consumption.js';
import initMongoose from './db/init.js';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.use("/consumption", consumption);

const DATABASE_URL = 'mongodb://localhost:27017/polihack-demo';
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(8081, () => console.log("App is listening on port 8081")))
  .catch(error => console.log(error))