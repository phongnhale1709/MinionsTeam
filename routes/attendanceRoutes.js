const express = require("express");
const router = express.Router();
const studentController = require("../Controllers/studentController");
const { auth } = require("../middlewares/authMiddleware");
const { checkRole } = require("../middlewares/roleMiddleware");

// Route to mark attendance for students
router.post("/mark-attendance", studentController.markAttendance);
router.get("/export/:class_name",studentController.getAllAttendance);

module.exports = router;
