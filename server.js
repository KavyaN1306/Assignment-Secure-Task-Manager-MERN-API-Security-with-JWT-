const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/taskmanager");

app.use("/api/auth", authRoutes);
app.use("/api", taskRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
