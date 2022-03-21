/**
 * @author Rares Liscan
 * 
 * In this module are added the routes that are following {API_URL}/consumption. 
 * Every requst requires a function that is defined in the controller package
 */

import express from 'express'
import { deleteAllFields, getAllFields, insertNewField } from '../controllers/consumptionController.js';

const router = express.Router();

router.get('/', getAllFields);
router.post('/add', insertNewField);
router.delete('/deleteAll', deleteAllFields);

export default router;