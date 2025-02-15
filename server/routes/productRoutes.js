import express from 'express';
import { getAllProducts, createProduct } from '../controllers/productController.js';
import { getProductById } from '../controllers/adminController.js';

const router = express.Router();

// GET all products
router.get('/', getAllProducts);

// POST a new product
router.post('/', createProduct);

// GET single product by ID
router.get('/:id', getProductById);

export default router;
