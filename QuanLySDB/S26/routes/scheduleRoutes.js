// routes/scheduleRoutes.js
const express = require("express");
const router = express.Router();
const scheduleController = require("../Controllers/scheduleController");
const { auth } = require("../middlewares/authMiddleware");
const { checkRole } = require("../middlewares/roleMiddleware");

router.post(
  "/create",
  auth,
  checkRole(["subject_head_teacher"]),
  scheduleController.createSchedule
);
router.get("/", auth, scheduleController.getSchedules);

module.exports = router;
