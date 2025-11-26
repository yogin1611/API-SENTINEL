// backend/src/routes/tasks.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');

// Create task
router.post('/', auth(), taskController.createTask);

// Get all tasks of the logged-in user
router.get('/', auth(), taskController.getTasks);

// Get a single task
router.get('/:id', auth(), taskController.getTask);

// Update a task
router.patch('/:id', auth(), taskController.updateTask);

// Delete a task
router.delete('/:id', auth(), taskController.deleteTask);

module.exports = router;
