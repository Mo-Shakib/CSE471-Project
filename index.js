import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

// Connect to MongoDB
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB connected!");
    }catch(err){
        throw err;
    }
};

app.listen(8800, () => {
    connect();
    console.log("Backend server is running!");
    }
);