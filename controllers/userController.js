const User = require("../models/User");
//getUserInfo

exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findByUsername(req.params.username);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
