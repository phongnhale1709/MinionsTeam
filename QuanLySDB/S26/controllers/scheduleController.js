// controllers/scheduleController.js
const Schedule = require("../models/Schedule");

exports.createSchedule = async (req, res) => {
  const { class_id, subject_teacher_id, date, time_slot, type } = req.body;
  try {
    const newSchedule = new Schedule({
      class_id,
      subject_teacher_id,
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
      .populate("class_id")
      .populate("subject_teacher_id");
    res.json(schedules);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
