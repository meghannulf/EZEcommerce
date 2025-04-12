import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const authUser = async (req, res, next) => {
    try {
        const token = req.headers.token;
        
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                message: 'Authorization token required' 
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: 'User not found' 
            });
        }

        req.user = user; // Attach user to request
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({ 
            success: false, 
            message: 'Invalid or expired token' 
        });
    }
};

export default authUser;