// routes/subjectTeacherRoutes.js
const express = require("express");
const router = express.Router();
const subjectTeacherController = require("../Controllers/subjectTeacherController");
const { auth } = require("../middlewares/authMiddleware");
const { checkRole } = require("../middlewares/roleMiddleware");

router.post("/assign", subjectTeacherController.assignSubjectTeacher);

router.get("/all", subjectTeacherController.getSubjectTeachers);
router.get("/sub", subjectTeacherController.getSubjectTeachersOnly);
router.get("/:id", subjectTeacherController.getSubjectTeacherById);

router.get("/", subjectTeacherController.viewSubjectTeacher);

module.exports = router;
