const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;
const hardcodedToken = process.env.AUTH_TOKEN;

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      error: "Missing token",
      message: "Please provide a valid token",
    });
  }

  if (token !== hardcodedToken) {
    return res.status(403).json({
      error: "Invalid token",
      message: "Please provide a valid token",
    });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({
        error: "Invalid token",
        message: "Token is expired or invalid",
      });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
