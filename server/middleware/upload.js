import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';  // Import your configured Cloudinary instance

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'raju-chicken', // Folder name in Cloudinary
        allowed_formats: ['jpg', 'jpeg', 'png'],
    },
});

const upload = multer({ storage });

export default upload;
