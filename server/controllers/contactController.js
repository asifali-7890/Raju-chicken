import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';
import { sendContactConfirmationEmail } from '../utils/sendEmail.js';



export const createContact = async (req, res) => {
    try {
        // console.log('Creating contact...');
        const { name, email, subject, message } = req.body;

        // Save to database
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        await sendContactConfirmationEmail(name, email, subject, message);

        res.status(201).json({
            success: true,
            message: 'Message sent successfully! Check your email for confirmation.'
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Error processing your request'
        });
    }
};