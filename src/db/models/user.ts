import { Sequelize, Model, DataTypes } from "sequelize";

import Database from "../../db/index";
const sequelize = Database.sequelize;

// this configures the `userId` attribute.

class User extends Model {
  declare id: number;
}
//User.belongsTo(User);
User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    tableName: "users",
    sequelize, // passing the `sequelize` instance is required
  }
);
