const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const connectDB = require("./db");

const newsRoutes = require("./routes/newsRoutes");

const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

connectDB();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", newsRoutes);

app.get("/", (req, res) => {
  res.send("API is Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
