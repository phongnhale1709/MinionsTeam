// routes/subjectTeacherRoutes.js
const express = require("express");
const router = express.Router();
const subjectTeacherController = require("../Controllers/subjectTeacherController");
const { auth } = require("../middlewares/authMiddleware");
const { checkRole } = require("../middlewares/roleMiddleware");

router.post(
  "/assign",
  auth,
  checkRole(["subject_head_teacher"]),
  subjectTeacherController.assignSubjectTeacher
);
router.get("/", auth, subjectTeacherController.getSubjectTeachers);

module.exports = router;
