import jwt from 'jsonwebtoken';
import User from '../models/User.js';


// middleware/authMiddleware.js
export const protect = async (req, res, next) => {

    // console.log('getCart');
    let token;
    // console.log('Authorization header:', req.headers.authorization);

    try {
        if (req.headers.authorization?.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            // console.log('No token found');
            return res.status(401).json({
                success: false,
                error: 'Not authorized, no token'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log('Decoded token:', decoded);

        req.user = await User.findById(decoded.id);
        if (!req.user) {
            // console.log('User not found with ID:', decoded.id);
            return res.status(401).json({
                success: false,
                error: 'User not found'
            });
        }

        // console.log('Authenticated user:', req.user.email);
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({
            success: false,
            error: 'Not authorized, token failed'
        });
    }
};

export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                error: `User role ${req.user.role} is not authorized to access this route`
            });
        }
        next();
    };
};
