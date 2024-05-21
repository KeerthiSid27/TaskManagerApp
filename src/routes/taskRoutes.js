const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Get all tasks
router.get("/", taskController.getAllTasks);

// Get single task
router.get("/:id", taskController.getTaskById);

// Create a task
router.post("/", taskController.createTask);

// Update a task
router.put("/:id", taskController.updateTask);

// Delete a task
router.delete("/:id", taskController.deleteTask);

module.exports = router;
