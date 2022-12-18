// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface UserGroupAddModel {
  id?: number;
  status: string;
  name: string;
}

export interface UserGroupModel {
  id?: number;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserGroupViewModel {
  id?: number;
  status: string;
  name: string;
}

//export class UserGroup extends Model<UserGroupModel, UserGroupCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class UserGroup extends Model<UserGroupModel> implements UserGroupModel {
    name: string;
    status: string;
    verified: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      UserGroup.belongsTo(models.Tenant, { targetKey: "id" });
    }
  }
  UserGroup.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      createdAt: "",
      updatedAt: "",
      status: "",
      name: "",
    },
    { sequelize }
  );
  //
};
