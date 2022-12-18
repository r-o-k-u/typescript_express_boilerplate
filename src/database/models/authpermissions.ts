// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface AuthPermissionAddModel {
  id?: number;
  status: string;
  verified: string;
}

export interface AuthPermissionModel {
  id?: number;
  status: string;
  verified: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthPermissionViewModel {
  id?: number;
  status: string;
  verified: string;
}

//export class AuthPermission extends Model<AuthPermissionModel, AuthPermissionCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class AuthPermission
    extends Model<AuthPermissionModel>
    implements AuthPermissionModel
  {
    status: string;
    verified: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      AuthPermission.belongsTo(models.Tenant, { targetKey: "id" });
      AuthPermission.hasMany(models.AuthPermissionDetails);
    }
  }
  AuthPermission.init(
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
