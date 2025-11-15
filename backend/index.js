import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";

import userRoutes from './routes/user.routes'

dotenv.config();
const app = express();
const port = process.env.PORT || 4001 ;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("MongoDB Connection Error: ", error))

app.use("/api/v1/user", userRoutes);

app.listen(port, () => {
    console.log(` Server is running on port ${port} `);
});