import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://urvashi24gupta:240705@cluster0.qyovs.mongodb.net/E-Commerce').then(()=>console.log("Database connected"));
}