import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  updateUserPassword
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.get('/profile/:id',getUserProfile) 
router.patch('/profile/:id',updateUserProfile) 
router.patch('/password/:id',updateUserPassword) 


// router 
//   .route('/profile')
//   .get(getUserProfile)
//   .patch(updateUserProfile);


export default router;