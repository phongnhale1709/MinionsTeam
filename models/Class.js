// models/Class.js
const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  class_name: { type: String, required: true },
  class_master_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Class", ClassSchema);
