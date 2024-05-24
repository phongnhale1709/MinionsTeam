// routes/scheduleRoutes.js
const express = require("express");
const router = express.Router();
const scheduleController = require("../Controllers/scheduleController");
const { auth } = require("../middlewares/authMiddleware");
const { checkRole } = require("../middlewares/roleMiddleware");

router.post(
  "/create",
  scheduleController.createSchedule
);
router.get("/all", scheduleController.getSchedules);
router.get("/", scheduleController.getView);

module.exports = router;
