const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Khởi tạo Express app
const app = express();
// Sử dụng các middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "views")));

// Định nghĩa các tuyến đường
app.use("/api", routes);

// Tuyến đường cho trang đăng nhập và đăng ký
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "register.html"));
});

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
