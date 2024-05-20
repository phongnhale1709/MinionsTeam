// routes/classRoutes.js
const express = require("express");
const router = express.Router();
const classController = require("../Controllers/classController");
const { auth } = require("../middlewares/authMiddleware");
const { checkRole } = require("../middlewares/roleMiddleware");

router.post(
  "/create",
  auth,
  checkRole(["class_master"]),
  classController.createClass
);
router.get("/", classController.getClass);
// router.get("/", auth, classController.getClass);

router.post(
  "/add-student",
  auth,
  checkRole(["class_master"]),
  classController.addStudent
);
router.get("/:class_id/students", auth, classController.getStudents);

module.exports = router;
