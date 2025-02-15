import express from 'express';
import { getCart, addToCart, updateCartItem } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js'; // Ensure this middleware sets req.user

const router = express.Router();

router.get('/', protect, getCart);
router.post('/add', protect, addToCart);
router.post('/update', protect, updateCartItem);

export default router;
