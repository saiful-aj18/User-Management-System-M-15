const authMiddleware = (req, res, next) => {
  console.log("Authentication Checked");

  next();
};

module.exports = authMiddleware;