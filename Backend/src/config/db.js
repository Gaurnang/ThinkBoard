import mongoose from "mongoose";

const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        throw new Error("MONGODB_URI is not set");
    }

    try {
        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("MongoDB connected successfully");
    }
    catch (error) {
        throw new Error(`MongoDB connection failed: ${error.message}`);
    }
}

export default connectDB;   