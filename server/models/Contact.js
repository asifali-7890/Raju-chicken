import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    subject: {
        type: String,
        required: [true, 'Subject is required'],
        trim: true,
        maxlength: [100, 'Subject cannot exceed 100 characters']
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        minlength: [10, 'Message should be at least 10 characters'],
        maxlength: [1000, 'Message cannot exceed 1000 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);