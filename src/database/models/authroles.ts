// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface AuthRoleAddModel {
  id?: number;
  status: string;
  name: string;
}

// interface for the AuthRole model
export interface AuthRoleModel {
  id?: number;
  status: string;
  name: string;
  codename: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthRoleViewModel {
  id?: number;
  status: string;
  name: string;
}

//export class AuthRole extends Model<AuthRoleModel, AuthRoleCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class AuthRole extends Model<AuthRoleModel> implements AuthRoleModel {
    codename: string;
    name: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      AuthRole.belongsTo(models.Tenant, { targetKey: "id" });
    }
  }
  AuthRole.init(
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
      codename: "",
    },
    { sequelize }
  );
  //
};
