import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Product description is required'],
            maxlength: [500, 'Description cannot exceed 500 characters'],
            trim: true,
        },
        weight: {
            type: String,
            required: [true, 'Product weight is required'],
            trim: true, // e.g., '800g', '1kg'
        },
        price: {
            type: Number,
            required: [true, 'Product price is required'],
            min: [0, 'Price cannot be negative'],
        },
        image: {
            type: String,
            required: [true, 'Product image URL is required'],
            trim: true,
        },
    },
    {
        timestamps: true, // Automatically manage createdAt and updatedAt
    }
);

export default mongoose.model('Product', productSchema);
