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


export const sendOrderConfirmationEmail = async (userEmail, order) => {
    console.log('This is the order confirmation email', userEmail);
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // or another email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Your Order Confirmation - Raju Chicken',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
            <h2 style="color: #ff6600; margin-bottom: 0;">Thank You For Your Order!</h2>
            <p style="margin-top: 5px;">Dear Customer,</p>
            <p>
              We are pleased to confirm that your order has been processed successfully. 
              Your order ID is <strong>${order._id}</strong>.
            </p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total Amount</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">₹${order.total}</td>
              </tr>
            </table>
            <p>
              We will notify you once your order is shipped. If you have any questions or need further assistance, please feel free to contact our support team.
            </p>
            <p>Thank you for choosing Raju Chicken!</p>
            <p style="margin-top: 20px;">Best regards,<br />Raju Chicken Team</p>
          </div>
        `,
    };


    await transporter.sendMail(mailOptions);
};