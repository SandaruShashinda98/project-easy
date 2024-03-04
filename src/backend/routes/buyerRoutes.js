import express from 'express';
import {
    createBuyer, getSingleBuyer, updateBuyer
} from '../controllers/buyerController.js';

const router = express.Router();

router.post('/', createBuyer);
router.get('/:id', getSingleBuyer);
router.patch('/:id', updateBuyer);


export default router;