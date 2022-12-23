// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

// interface for the AuthGroup model
/**
 * AuthGroup:
 *  @remarks
 * This model represents a group of users that share certain permissions.
 *  It includes fields such as id, name, description, tenantId, createdAt, and updatedAt.
 */
export interface IAuthGroup {
  id: number; // unique identifier for the permission
  code: string; // unique code used to identify the permission in codebase or API calls
  name: string; // name of the permission
  description?: string; // optional description of the permission
  tenantId: number; // ID for the tenant that the user belongs to (foreign key)
}

export interface AuthGroupViewModel {
  id?: number;
  status: string;
  verified: string;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * AuthGroup:
   *  @remarks
   * This class represents the AuthGroup model, which is used to group users together
   * for the purpose of applying permissions and roles.
   * It includes fields such as id, name, and description.
   */
  class AuthGroup extends Model<IAuthGroup> implements IAuthGroup {
    tenantId: number;
    code: string;
    description?: string | undefined;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    status: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      AuthGroup.belongsTo(models.Tenant, {
        foreignKey: "tenantId",
        as: "tenant",
      });
      AuthGroup.hasMany(models.AuthPermission, {
        foreignKey: "authGroupId",
        as: "authPermissions",
      });
    }
  }
  AuthGroup.init(
    {
      id: {
        type: DataTypes.INTEGER, // integer data type
        primaryKey: true, // sets the column as the primary key
        autoIncrement: true, // increments the value automatically
        comment: " ",
      },
      code: {
        // unique code used to identify the permission in codebase or API calls
        type: DataTypes.STRING, // string data type
        allowNull: false, // disallows null values
        comment:
          "unique code used to identify the permission in codebase or API calls ",
      },
      name: {
        // name of the permission
        type: DataTypes.STRING, // string data type
        allowNull: false, // disallows null values
        comment: "name of the permission ",
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
      description: {
        // optional description of the permission
        type: DataTypes.STRING, // string data type
        comment: "optional description of the permission ",
      },
    },
    { sequelize }
  );
  //
  return AuthGroup;
};
