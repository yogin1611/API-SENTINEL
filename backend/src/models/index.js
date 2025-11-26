const sequelize = require("../config/database");
const User = require("./user");
const Task = require("./task");

User.initModel(sequelize);
Task.initModel(sequelize);

module.exports = { sequelize, User, Task };
