const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const connectDB = require("./db");

const newsRoutes = require("./routes/newsRoutes");

// Initialize App
const app = express();
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Serve Static Files (Images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

// Routes
app.use("/api", newsRoutes);

app.get("/", (req, res) => {
  res.send("API is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
