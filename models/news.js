const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: String,
  details: String,
  images: [String], 
});
module.exports = mongoose.model("News", newsSchema);
