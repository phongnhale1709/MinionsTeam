// controllers/subjectTeacherController.js
const SubjectTeacher = require("../models/SubjectTeacher");

exports.assignSubjectTeacher = async (req, res) => {
  const { user_id, class_id, subject } = req.body;
  try {
    const newSubjectTeacher = new SubjectTeacher({
      user_id,
      class_id,
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
      .populate("user_id")
      .populate("class_id");
    res.json(subjectTeachers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
