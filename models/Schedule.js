// models/Schedule.js
const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  class_name: {
    type: String,
    required: true,
  },
  subject_teacher_username: {
    type: String,
    required: true,
  },
  date: { type: Date, required: true },
  time_slot: { type: String, required: true },
  type: {
    type: String,
    enum: ["main", "substitute", "makeup"],
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
