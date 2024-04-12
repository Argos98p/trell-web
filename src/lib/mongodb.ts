import mongoose from 'mongoose';

const MONGO_URL = "mongodb://127.0.0.1/trello-app"

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Connected to mongoDB");
        
    } catch (error) {
        console.log(error);
        
    }
}