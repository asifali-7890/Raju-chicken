import Product from '../models/Product.js';

export const createProductAdmin = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        console.log('Uploaded file:', req.file);
        const { name, description, weight, price } = req.body;
        const imageUrl = req.file?.path; // Cloudinary URL
        console.log('Uploading image:', imageUrl);
        if (!imageUrl) {
            return res.status(400).json({ success: false, error: 'Image upload failed' });
        }

        const newProduct = await Product.create({
            name,
            description,
            weight,
            price,
            image: imageUrl,
        });

        res.status(201).json({ success: true, product: newProduct });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};


// GET /api/products/:id
export const getProductById = async (req, res) => {
    try {
        console.log('Its checking here..');
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        res.json({ success: true, product });
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};
