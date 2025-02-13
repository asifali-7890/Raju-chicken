// orderRoutes.js
import express from 'express';
const router = express.Router();

// Define your routes
router.get('/', (req, res) => {
    res.send('Get all orders');
});

// Export the router
export default router;
