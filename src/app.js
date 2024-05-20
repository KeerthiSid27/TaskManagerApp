require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const authenticateJwt = require("./security/authenticateJWT");

// Connect to MongoDB
connectDB();

// Create an express application
const app = express();

// Parse incoming request bodies with JSON payloads
app.use(express.json());

// Pass the request to taskRoutes only when authentication is success
app.use("/api/tasks", authenticateJwt, taskRoutes);

const PORT = process.env.PORT || 3000;

// Start the express application
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Error handling for unauthorized access
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: "Invalid token" });
  } else {
    next(err);
  }
});
