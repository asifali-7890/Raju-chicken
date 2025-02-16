import Order from '../models/Order.js';
import Cart from '../models/Cart.js'; // Assuming you have a Cart model that stores cart items for each user
import { sendOrderConfirmationEmail } from '../utils/sendEmail.js';

export const checkout = async (req, res) => {
    try {
        const userId = req.user._id; // Provided by auth middleware
        const taxRate = 0.18; // 18% GST
        const shippingFee = 49; // Fixed shipping cost

        // Find the cart for the user and populate the product details
        let cart = await Cart.findOne({ user: userId }).populate('items.product');
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ success: false, error: 'Cart is empty' });
        }

        // Calculate the total price
        const subtotal = cart.items.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
        );

        const tax = subtotal * taxRate;
        const total = subtotal + tax + shippingFee;


        // Create a new order using the cart items
        const order = await Order.create({
            user: userId,
            items: cart.items,
            total,
            status: 'processing',
        });

        // Clear the cart after checkout
        cart.items = [];
        await cart.save();

        // Send order confirmation email to the user.
        // Ensure that req.user contains the user's email.
        await sendOrderConfirmationEmail(req.user.email, order);

        res.status(201).json({ success: true, order });
    } catch (error) {
        console.error('Checkout error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};
