// controllers/studentController.js
const Student = require("../models/Student");
const Attendance = require("../models/Attendance");
const path = require("path");
const User = require("../models/User");
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find({ class_id: req.params.class_id });
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

//student information

exports.getStudentsInfo = async (req, res) => {
  try {
    const student = await Student.findById(req.params.student_id);
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET ALL ATTENDANCE
exports.getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({
      class_name: req.params.class_name,
    });
    res.json(attendance);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.markAttendance = async (req, res) => {
  const { class_name, subject_teacher_username, attendances } = req.body;
  try {
    // Create the attendance records from the request body
    const attendanceRecords = attendances.map((attendance) => ({
      student_name: attendance.student_name,
      date: new Date(), // You can modify this if needed
      status: attendance.status,
    }));
    const subject = await User.findOne({
      username: subject_teacher_username,
    });
    if (!subject) {
      return res.status(404).json({ message: "Subject teacher not found" });
    }
    // Create a new Attendance document
    const newAttendance = new Attendance({
      class_name,
      subject_teacher_username,
      subject,
      attendance_records: attendanceRecords,
    });

    // Save the new Attendance document
    const savedAttendance = await newAttendance.save();

    res.json(savedAttendance);
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
//view all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

//create students

exports.createStudent = async (req, res) => {
  try {
    const { student_name, class_name, dob, address } = req.body;

    // Validate input
    if (!student_name || !class_name || !dob || !address) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new student instance
    const newStudent = new Student({
      student_name,
      class_name,
      dob,
      address,
    });

    // Save the student to the database
    const savedStudent = await newStudent.save();

    // Respond with the saved student
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Server error" });
  }
};
exports.viewStudents = async (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "students.html"));
};

exports.getStudentList = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
