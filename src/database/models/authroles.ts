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
  tenantId: number; // ID for the tenant that the user belongs to (foreign key)
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
    tenantId: number;
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
      AuthRole.belongsTo(models.AuthGroup, {
        foreignKey: "groupId",
        as: "group",
      });
    }
  }
  AuthRole.init(
    {
      id: {
        type: DataTypes.INTEGER, // integer data type
        primaryKey: true, // sets the column as the primary key
        autoIncrement: true, // increments the value automatically
        comment: " ",
      },
      code: {
        // unique code used to identify the role in codebase or API calls
        type: DataTypes.STRING, // string data type
        allowNull: false, // disallows null values
        comment:
          "unique code used to identify the role in codebase or API calls",
      },
      name: {
        // name of the role
        type: DataTypes.STRING, // string data type
        allowNull: false, // disallows null values
        comment: "name of the role",
      },
      description: {
        // optional description of the role
        type: DataTypes.STRING, // string data type
        comment: "optional description of the role",
      },
      tenantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "ID for the tenant that the user belongs to (foreign key) ",
        /*  references: {
          model: "tenants",
          key: "id",
        }, */
      },
    },
    { sequelize }
  );
  //
  return AuthRole;
};
