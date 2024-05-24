// routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const studentController = require("../Controllers/studentController");
const { auth } = require("../middlewares/authMiddleware");
const { checkRole } = require("../middlewares/roleMiddleware");
router.get("/all", studentController.getAllStudents);
router.post("/all/:id", studentController.getStudentsInfo);

router.get("/:class_id", studentController.getStudents);

router.post("/create", studentController.createStudent);

router.post(
  "/attendance",
  auth,
  checkRole(["subject_teacher"]),
  studentController.markAttendance
);

router.get("/class/:class_name", studentController.getStudentList);
router.get(
  "/attendance/:class_id/:student_id",
  auth,
  studentController.getAttendance
);
router.get("/", studentController.viewStudents);
module.exports = router;
