//G5B1WINzIYjid9bD
import express from "express"
import dotenv from "dotenv"
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
const app=express();

app.use(express.json()); //allows us to extract user data

app.use("/api/auth",authRoutes);
const PORT=process.env.PORT || 5001

app.listen(PORT,()=>{
    console.log("server is running on",PORT);
    connectDB()
    
})

