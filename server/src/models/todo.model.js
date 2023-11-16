const { DataTypes } = require("sequelize");
const connectMysql = require("../configs/db.config");

const Todo = connectMysql.define(
  "Todo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    work: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
  },
  { timestamps: true }
);

module.exports = Todo;
