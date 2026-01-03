//G5B1WINzIYjid9bD
import express from "express"
import dotenv from "dotenv"
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
const app=express();
import cookieParser from "cookie-parser";
import cors from 'cors';
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}))
app.use(express.json()); //allows us to extract user data
app.use(cookieParser());//to parse cookies from request
app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log("server is running on",PORT);
    connectDB()
    
})

