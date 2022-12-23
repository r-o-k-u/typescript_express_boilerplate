// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

// interface for the AuthPermission model
/**
 * AuthPermission:
 *  @remarks
 * This model represents a permission that can be granted to a user or group.
 * It includes fields such as id, name, description, tenantId, createdAt, and updatedAt.
 */
export interface IAuthPermission {
  id: number; // unique identifier for the permission
  code: string; // unique code used to identify the permission in codebase or API calls
  name: string; // name of the permission
  description?: string; // optional description of the permission
  tenantId: number; // ID for the tenant that the user belongs to (foreign key)
}

//export class AuthPermission extends Model<AuthPermissionModel, AuthPermissionCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * AuthPermission:
   *  @remarks
   * This class represents the AuthPermission model, which is used to define specific permissions
   * that can be assigned to users or groups.
   * It includes fields such as id, name, and description.
   */
  class AuthPermission
    extends Model<IAuthPermission>
    implements IAuthPermission
  {
    tenantId: number;
    code: string;
    name: string;
    description?: string | undefined;
    createdAt: Date;
    updatedAt: Date;
    id: CreationOptional<number>;
    static associate(models: any) {
      AuthPermission.belongsTo(models.Tenant, {
        foreignKey: "tenantId",
        as: "tenant",
      });
    }
  }
  AuthPermission.init(
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
          " unique code used to identify the permission in codebase or API calls",
      },
      name: {
        // name of the permission
        type: DataTypes.STRING, // string data type
        allowNull: false, // disallows null values
        comment: "name of the permission ",
      },
      description: {
        // optional description of the permission
        type: DataTypes.STRING, // string data type
        comment: " optional description of the permission",
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
  return AuthPermission;
};
