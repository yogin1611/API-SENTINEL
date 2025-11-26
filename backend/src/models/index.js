const sequelize = require('../config/db');
const User = require('./user');
const Task = require('./task');

// A user *has many* tasks
User.hasMany(Task, {
  foreignKey: 'userId',
  as: 'tasks',
  onDelete: 'CASCADE'
});

// A task *belongs to* a user
Task.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

module.exports = {
  sequelize,
  User,
  Task
};
