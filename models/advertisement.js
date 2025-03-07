const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
    image: { type: String },
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Advertisement", adSchema);
