// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

// interface for the AuthRole model
/**
 * AuthRole:
 *  @remarks
 * This model represents a role that a user can have within an organization or tenant.
 * It includes fields such as id, name, description, tenantId, createdAt, and updatedAt.
 */
export interface IAuthRole {
  id: number; // unique identifier for the role
  code: string; // unique code used to identify the role in codebase or API calls
  name: string; // name of the role
  description: string; // optional description of the role
  createdAt: Date; // date when the role was created
  updatedAt: Date; // date when the role was last updated
}

export interface AuthRoleView {
  id?: number;
  status: string;
  name: string;
}

//export class AuthRole extends Model<AuthRoleModel, AuthRoleCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * AuthRole:
   *  @remarks
   * This class represents the AuthRole model,
   * which is used to define a set of permissions that can be assigned to users or groups.
   *  It includes fields such as id, name, and description
   */
  class AuthRole extends Model<IAuthRole> implements IAuthRole {
    code: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    codename: string;
    name: string;
    status: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      AuthRole.belongsTo(models.Tenant, {
        foreignKey: "tenantId",
        as: "tenant",
      });
    }
  }
  AuthRole.init(
    {
      id: {
        type: DataTypes.INTEGER, // integer data type
        primaryKey: true, // sets the column as the primary key
        autoIncrement: true, // increments the value automatically
      },
      code: {
        // unique code used to identify the role in codebase or API calls
        type: DataTypes.STRING, // string data type
        allowNull: false, // disallows null values
      },
      name: {
        // name of the role
        type: DataTypes.STRING, // string data type
        allowNull: false, // disallows null values
      },
      description: {
        // optional description of the role
        type: DataTypes.STRING, // string data type
      },
      createdAt: {
        // date when the role was created
        type: DataTypes.DATE, // date data type
      },
      updatedAt: {
        // date when the role was last updated
        type: DataTypes.DATE, // date data type
      },
    },
    { sequelize }
  );
  //
};
