import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { sendOTPEmail } from '../utils/sendEmail.js';

// Endpoint to send OTP (for both existing and new users)
export const sendOTP = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, error: 'Email is required' });
        }

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (!user) {
            // Create a new user if not found
            user = await User.create({ email });
        }

        // Generate a 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        // Set OTP expiration (5 minutes from now)
        const otpExpire = Date.now() + 5 * 60 * 1000;

        // Update user with OTP and its expiration
        user.otp = otp;
        user.otpExpire = otpExpire;
        await user.save();

        // Send the OTP via email
        await sendOTPEmail(email, otp);

        res.status(200).json({ success: true, message: 'OTP sent. Please check your email.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// Endpoint to verify OTP and log the user in
export const verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({ success: false, error: 'Email and OTP are required' });
        }

        // Find the user by email
        const user = await User.findOne({ email }).select('+otp');

        if (!user) {
            return res.status(400).json({ success: false, error: 'User not found' });
        }

        // Check if OTP matches

        console.log('Stored OTP:', typeof user.otp);
        console.log('Entered OTP:', typeof otp);

        if (user.otp !== otp) {
            return res.status(400).json({ success: false, error: 'Invalid OTP' });
        }

        // Check if OTP has expired
        if (user.otpExpire < Date.now()) {
            return res.status(400).json({ success: false, error: 'OTP expired' });
        }

        // OTP is valid—mark user as verified
        user.isVerified = true;
        // Optionally, clear OTP fields
        user.otp = undefined;
        user.otpExpire = undefined;
        await user.save();

        // Generate a JWT token for authentication
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(200).json({ success: true, message: 'Logged in successfully', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};
