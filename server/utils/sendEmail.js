import nodemailer from 'nodemailer';

export const sendOTPEmail = async (userEmail, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // or your preferred email service
        auth: {
            user: process.env.EMAIL_USER, // e.g., your Gmail address
            pass: process.env.EMAIL_PASS, // your Gmail app password (or similar)
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Your OTP for Sign In',
        text: `Hello,

Your One-Time Password (OTP) is: ${otp}
It will expire in 5 minutes.

Please enter this OTP on the sign in page to complete your authentication.

If you did not request this, please ignore this email.`,
    };

    await transporter.sendMail(mailOptions);
};
