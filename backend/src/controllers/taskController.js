// backend/src/controllers/taskController.js
const { Task } = require('../models');

// Create a new task
exports.createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      userId: req.user.id   // automatically set from JWT
    });

    res.status(201).json({
      message: 'Task created successfully',
      task
    });
  } catch (err) {
    next(err);
  }
};

// Get all tasks of the logged-in user
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.user.id }
    });

    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// Get a single task (owner or admin only)
exports.getTask = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Only owner or admin can access
    if (task.userId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    res.json(task);
  } catch (err) {
    next(err);
  }
};

// Update task
exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Only owner or admin
    if (task.userId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await task.update(req.body);

    res.json({
      message: 'Task updated successfully',
      task
    });
  } catch (err) {
    next(err);
  }
};

// Delete task
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Only owner or admin
    if (task.userId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await task.destroy();

    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    next(err);
  }
};