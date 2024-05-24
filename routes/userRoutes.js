// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const { auth } = require("../middlewares/authMiddleware");
const { checkRole } = require("../middlewares/roleMiddleware");

router.get("/:username", userController.getUserInfo);

module.exports = router;
