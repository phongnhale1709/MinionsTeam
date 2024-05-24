// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/register", authController.viewRegister);
router.get("/login", authController.viewLogin);

module.exports = router;
