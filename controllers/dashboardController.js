const path = require("path");

exports.renderDashboard = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "dashboard.html"));
};
