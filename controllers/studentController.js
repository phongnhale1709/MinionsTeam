// controllers/studentController.js
const Student = require("../models/Student");
const Attendance = require("../models/Attendance");

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find({ class_id: req.params.class_id });
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.markAttendance = async (req, res) => {
  const { class_id, student_id, date, status } = req.body;
  try {
    const newAttendance = new Attendance({
      class_id,
      student_id,
      date,
      status,
    });
    await newAttendance.save();
    res.json(newAttendance);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({
      class_id: req.params.class_id,
      student_id: req.params.student_id,
    });
    res.json(attendance);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
