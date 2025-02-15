import Product from '../models/Product.js';

// GET /api/products - Retrieve all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// POST /api/products - Create a new product
export const createProduct = async (req, res) => {
    try {
        const { name, description, weight, price, image } = req.body;
        const newProduct = await Product.create({
            name,
            description,
            weight,
            price,
            image,
        });
        res.status(201).json({ success: true, product: newProduct });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
