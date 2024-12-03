import express from "express";
import userRoutes from "./routes/userRoutes.js"
import cors from "cors"
import { connectDB } from "./lib/dbsetup.js";

const app = express(); 

// Middleware to process JSON data
app.use(express.json()); 
app.use(cors())

connectDB()

// GET endpoint
app.get("/", (req, res) => {
  res.send("Hi");
});


// Login endpoint
app.use("/user", userRoutes);


app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    error: {
      message: err.message || 'Internal Servererror',
      status: status,
    },
  });
});


// Start the server
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});