// routes/index.js
const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const classRoutes = require("./classRoutes");
const studentRoutes = require("./studentRoutes");
const subjectTeacher = require("./subjectTeacherRoutes");
const scheduleRoutes = require("./scheduleRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/auth", authRoutes);
router.use("/classes", classRoutes);
router.use("/schedules", scheduleRoutes);
router.use("/students", studentRoutes);
router.use("/subject-teachers", subjectTeacher);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
