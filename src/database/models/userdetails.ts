// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface UserDetailAddModel {
  id?: number;
  email: string;
  password: string;
}

export interface UserDetailModel {
  id?: number;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserDetailViewModel {
  id: number;
  email: string;
}

//export class UserDetail extends Model<UserDetailModel, UserDetailCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class UserDetail extends Model<UserDetailModel> implements UserDetailModel {
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      UserDetail.belongsTo(models.User, { targetKey: "id" });
    }
  }
  UserDetail.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      email: "",
      password: "",
      createdAt: "",
      updatedAt: "",
    },
    { sequelize }
  );
  //
};
