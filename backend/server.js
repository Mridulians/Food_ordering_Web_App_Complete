import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import dotenv from 'dotenv';


// app config
const app = express();
const port = process.env.PORT || 4000;
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());

//DB Connection
connectDB();

//api endpoint
app.use('/api/food' , foodRouter)
app.use("/images" , express.static('uploads'))
app.use('/api/user' , userRouter)
app.use('/api/cart' , cartRouter)
app.use('/api/order' , orderRouter)

app.get("/", (req, res) => {
  res.send("API CREATED");
});

app.listen(port, (req, res) => {
  console.log(`server is running on http://localhost:${port}`);
});

//mongodb+srv://gmridul898:Mridul#12345@cluster0.jmc0c.mongodb.net/
