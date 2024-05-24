// controllers/scheduleController.js
const Schedule = require("../models/Schedule");
const path = require("path");
exports.createSchedule = async (req, res) => {
  console.log(req.body);
  const { class_name, subject_teacher_username, date, time_slot, type } =
    req.body;
  try {
    const newSchedule = new Schedule({
      class_name,
      subject_teacher_username,
      date,
      time_slot,
      type,
    });
    await newSchedule.save();
    res.json(newSchedule);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find()
      .populate("class_name")
      .populate("subject_teacher_username");
    // console.log(schedules);
    res.json(schedules);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getView = async (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "schedules.html"));
};
