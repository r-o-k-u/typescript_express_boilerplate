import { Sequelize, Model, DataTypes } from "sequelize";

import Database from "../../db/index";
const sequelize = Database.sequelize;

// this configures the `userId` attribute.

class UserDetails extends Model {
  declare id: number;
}
//User.belongsTo(User);
UserDetails.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    tableName: "user_details",
    sequelize, // passing the `sequelize` instance is required
  }
);
