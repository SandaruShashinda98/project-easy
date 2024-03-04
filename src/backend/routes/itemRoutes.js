import express from 'express';
import {
    createItem, getAllItems, updateItem
} from '../controllers/itemController.js';

const router = express.Router();

router.get('/', getAllItems);
router.post('/', createItem);
router.patch('/', updateItem);


export default router;