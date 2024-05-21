const mongoose = require("mongoose");

// Define the Task schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  priority: String,
  status: String,
  assignee: String,
  creator: String,
  completionDate: Date,
  estimatedTime: String,
  comments: [String],
});

const Task = mongoose.models.Task || mongoose.model("Tasks", taskSchema);

module.exports = Task;
