import express from 'express';
import { createProductAdmin } from '../controllers/adminController.js';
import upload from '../middleware/upload.js'; // Multer + Cloudinary

const router = express.Router();

// POST /api/admin/products
// 'image' is the field name from the form data
router.post('/products', upload.single('image'), createProductAdmin);

export default router;
