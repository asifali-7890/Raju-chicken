// orderRoutes.js
import express from 'express';
import { checkout } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

// Define your routes
// router.get('/', (req, res) => {
//     res.send('Get all orders');
// });

router.post('/checkout', protect, checkout);

// Export the router
export default router;
