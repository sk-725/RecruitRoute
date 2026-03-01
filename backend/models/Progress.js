const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  date: { type: String, required: true },
  problems: { type: Number, required: true },
  hours: { type: Number, required: true },
  topic: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Progress", progressSchema);