import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();  // Make sure this is at the top
import path from 'path';
import { fileURLToPath } from 'url';

// Connect to database
connectDB();

// Routes
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import contactRouter from './routes/contact.js';
// ...
const app = express();

// Middleware
app.use(express.json()); // Must come first
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api', contactRouter);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});




// Middleware
app.use(
    cors({
        origin: [
            'https://raju-chicken.onrender.com',
            'http://localhost:5173'
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    })
);



// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
