// controllers/subjectTeacherController.js
const SubjectTeacher = require("../models/SubjectTeacher");
const User = require("../models/User");
const path = require("path");
exports.assignSubjectTeacher = async (req, res) => {
  const { username, class_name, subject } = req.body;
  try {
    const newSubjectTeacher = new SubjectTeacher({
      username,
      class_name,
      subject,
    });
    await newSubjectTeacher.save();
    res.json(newSubjectTeacher);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getSubjectTeachers = async (req, res) => {
  try {
    const subjectTeachers = await SubjectTeacher.find()
      .populate("username")
      .populate("class_name");
    res.json(subjectTeachers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.viewSubjectTeacher = async (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "subject-teachers.html"));
};

exports.getSubjectTeachersOnly = async (req, res) => {
  try {
    const teachers = await User.find({
      role: { $in: ["subject_teacher", "head_subject_teacher"] },
    });
    res.json(teachers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
//get subject -teacher by id

exports.getSubjectTeacherById = async (req, res) => {
  try {
    const subjectTeacher = await SubjectTeacher.findById(req.params.id);
    res.json(subjectTeacher);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
