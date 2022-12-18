// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface UserAddModel {
  id?: number;
  status: string;
  verified: string;
}

export interface UserModel {
  id?: number;
  status: string;
  verified: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserViewModel {
  id?: number;
  status: string;
  verified: string;
}

//export class User extends Model<UserModel, UserCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class User extends Model<UserModel> implements UserModel {
    status: string;
    verified: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      User.belongsTo(models.Tenant, { targetKey: "id" });
      User.hasMany(models.UserDetails);
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      createdAt: "",
      updatedAt: "",
      status: "",
      verified: "",
    },
    { sequelize }
  );
  //
};
