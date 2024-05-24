const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const path = require("path");

// Middleware function to set username in res.locals
exports.setUsername = async (req, res, next) => {
  const { username } = req.body;
  res.locals.username = username;
  next();
};

exports.register = async (req, res) => {
  const { username, password, role } = req.body; //request
  console.log(req.body);
  try {
    // Kiểm tra xem có tồn tại username trong cơ sở dữ liệu chưa
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Tạo một user mới
    user = new User({ username, role });

    // Gán giá trị password từ req.body vào user
    user.password = password;

    // Hash password trước khi lưu vào cơ sở dữ liệu
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Lưu user mới vào cơ sở dữ liệu
    await user.save();

    // Trả về token hoặc thông báo thành công
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
exports.viewLogin = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "login.html"));
};
exports.viewRegister = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "register.html"));
};
