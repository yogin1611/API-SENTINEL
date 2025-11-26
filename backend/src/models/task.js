const { DataTypes, Model } = require("sequelize");

class Task extends Model {
  static initModel(sequelize) {
    Task.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        completed: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        }
      },
      {
        sequelize,
        modelName: "Task",
        tableName: "tasks"
      }
    );
  }
}

module.exports = Task;
