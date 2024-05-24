// models/Attendance.js
const mongoose = require("mongoose");

const StudentAttendanceSchema = new mongoose.Schema({
  student_name: {
    type: mongoose.Schema.Types.String,
    ref: "Student",
    required: true,
  },
  date: { type: Date, required: true },
  status: { type: String, enum: ["present", "absent"], required: true },
});

const AttendanceSchema = new mongoose.Schema({
  class_name: {
    type: mongoose.Schema.Types.String,
    ref: "Class",
    required: true,
  },
  subject_teacher_username: {
    type: mongoose.Schema.Types.String,
    ref: "Teacher",
    required: true,
  },
  subject: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  attendance_records: [StudentAttendanceSchema],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
