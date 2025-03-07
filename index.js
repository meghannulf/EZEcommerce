import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRoute from './Routes/productRoute.js';
// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());


//db connection
connectDB();


//API endpoints
app.use("/api/product",productRoute);
// routes
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

