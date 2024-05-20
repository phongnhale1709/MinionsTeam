// routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const studentController = require("../Controllers/studentController");
const { auth } = require("../middlewares/authMiddleware");
const { checkRole } = require("../middlewares/roleMiddleware");

router.get("/:class_id", auth, studentController.getStudents);
router.post(
  "/attendance",
  auth,
  checkRole(["subject_teacher"]),
  studentController.markAttendance
);
router.get(
  "/attendance/:class_id/:student_id",
  auth,
  studentController.getAttendance
);

module.exports = router;
