// routes/classRoutes.js
const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");
const { auth } = require("../middlewares/authMiddleware");
const {
  checkRole,
  checkRoleMiddleware,
} = require("../middlewares/roleMiddleware");

router.post(
  "/create",
  // checkRoleMiddleware(["class_master"]),
  classController.createClass
);
router.get("/", classController.viewClass);
// router.get("/", auth, classController.getClass);
router.get("/all", classController.allClass);

router.post(
  "/add-student",
  auth,
  checkRole(["class_master"]),
  classController.addStudent
);
router.get("/:class_id/students", classController.getStudents);

module.exports = router;
