import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log(err);
})
const app=express()

// for allow json

app.use(express.json())


app.listen(5000,()=>{
    console.log("server is running");
})

app.use("/api/auth",authRoutes)