// models/Student.js
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  student_name: { type: String, required: true },
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", StudentSchema);
