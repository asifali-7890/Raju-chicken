import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

// Get cart for logged-in user
export const getCart = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming req.user is set from auth middleware
        let cart = await Cart.findOne({ user: userId }).populate('items.product');
        if (!cart) {
            // Create a cart if one doesn't exist
            cart = await Cart.create({ user: userId, items: [] });
        }
        res.json({ success: true, cart });
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// Add a product to cart (or increment quantity if already in cart)
export const addToCart = async (req, res) => {
    try {
        const userId = req.user._id;
        const { productId } = req.body;

        // Ensure the product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            cart = await Cart.create({ user: userId, items: [] });
        }

        const itemIndex = cart.items.findIndex(
            (item) => item.product.toString() === productId
        );

        if (itemIndex > -1) {
            // Product already in cart: increment quantity
            cart.items[itemIndex].quantity += 1;
        } else {
            // Not in cart: add new item
            cart.items.push({ product: productId, quantity: 1 });
        }

        await cart.save();
        cart = await cart.populate('items.product');
        res.json({ success: true, cart });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update cart item quantity (increment or decrement)
export const updateCartItem = async (req, res) => {
    try {
        const userId = req.user._id;
        const { productId, quantity } = req.body;

        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({ success: false, error: 'Cart not found' });
        }

        const itemIndex = cart.items.findIndex(
            (item) => item.product.toString() === productId
        );
        if (itemIndex === -1) {
            return res.status(404).json({ success: false, error: 'Product not in cart' });
        }

        if (quantity <= 0) {
            // Remove item if quantity is zero or less
            cart.items.splice(itemIndex, 1);
        } else {
            cart.items[itemIndex].quantity = quantity;
        }
        await cart.save();
        cart = await cart.populate('items.product');
        res.json({ success: true, cart });
    } catch (error) {
        console.error('Error updating cart item:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};
