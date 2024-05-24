// middlewares/roleMiddleware.js
exports.checkRole = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (roles.includes(userRole)) {
      next();
    } else {
      res.status(403).json({
        message: "Forbidden: You do not have the necessary permissions",
      });
    }
  };
};

exports.checkRoleMiddleware = (roles) => {
  return (req, res, next) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log(req.user);
      const userRole = req.user.role;
      if (roles.includes(userRole)) {
        next();
      } else {
        res.status(403).json({
          message: "Forbidden: You do not have the necessary permissions",
        });
      }
    } catch (err) {
      res.status(401).json({ message: "Token is not valid" });
    }
  };
};
