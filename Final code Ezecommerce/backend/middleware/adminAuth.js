import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const adminAuth = async (req, res, next) => {
    try {
        const token = req.headers.token;
        
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                message: "Authorization token required" 
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const adminUser = await userModel.findOne({ 
            _id: decoded.id, 
            isAdmin: true 
        });

        if (!adminUser) {
            return res.status(403).json({ 
                success: false, 
                message: "Admin privileges required" 
            });
        }

        req.user = adminUser; // Attach admin user to request
        next();
    } catch (error) {
        console.error('Admin auth error:', error);
        res.status(401).json({ 
            success: false, 
            message: "Invalid or expired token" 
        });
    }
};

export default adminAuth;