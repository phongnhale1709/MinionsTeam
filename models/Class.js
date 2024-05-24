// models/Class.js
const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  class_name: { type: String, required: true },
  class_master_name: { type: String, required: true }, // Changed field to class_master_name
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Class", ClassSchema);
