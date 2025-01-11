import express, { json } from "express";
import { connect } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// routes

import userRouter from "./routes/userRoutes.js";
import ticketRouter from "./routes/ticketRoutes.js";

const app = express();
app.use(cors());
app.use(json());

const port = process.env.PORT || 8000;
const uri = process.env.MONGODB_URI;

connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

// user routes
app.use("/api/user", userRouter);

// ticket routes
app.use("/api/ticket", ticketRouter);
