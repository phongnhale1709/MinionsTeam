// controllers/classController.js
const Class = require("../models/Class");
const Student = require("../models/Student");

exports.createClass = async (req, res) => {
  const { class_name, class_master_id } = req.body;
  try {
    const newClass = new Class({ class_name, class_master_id });
    await newClass.save();
    res.json(newClass);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getClass = async (req, res) => {
  try {
    // Lấy danh sách các lớp học từ cơ sở dữ liệu
    const classes = await Class.find().populate("class_master_id");

    // Render danh sách lớp học ra cho client
    res.render("classes", { classes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.addStudent = async (req, res) => {
  const { student_name, class_id, dob, address } = req.body;
  try {
    const newStudent = new Student({ student_name, class_id, dob, address });
    await newStudent.save();
    res.json(newStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find({ class_id: req.params.class_id });
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
