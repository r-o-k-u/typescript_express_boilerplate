// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface AuthGroupAddModel {
  id?: number;
  status: string;
  verified: string;
}

// interface for the AuthGroup model
export interface AuthGroupModel {
  id?: number;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthGroupViewModel {
  id?: number;
  status: string;
  verified: string;
}

//export class AuthGroup extends Model<AuthGroupModel, AuthGroupCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class AuthGroup extends Model<AuthGroupModel> implements AuthGroupModel {
    name: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      AuthGroup.belongsTo(models.Tenant, { targetKey: "id" });
      AuthGroup.hasMany(models.AuthGroupDetails);
    }
  }
  AuthGroup.init(
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
