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
  createdAt: Date; // date when the permission was created
  updatedAt: Date; // date when the permission was last updated
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
      AuthPermission.hasMany(models.AuthPermissionDetails);
    }
  }
  AuthPermission.init(
    {
      id: {
        type: DataTypes.INTEGER, // integer data type
        primaryKey: true, // sets the column as the primary key
        autoIncrement: true, // increments the value automatically
      },
      code: {
        // unique code used to identify the permission in codebase or API calls
        type: DataTypes.STRING, // string data type
        allowNull: false, // disallows null values
      },
      name: {
        // name of the permission
        type: DataTypes.STRING, // string data type
        allowNull: false, // disallows null values
      },
      description: {
        // optional description of the permission
        type: DataTypes.STRING, // string data type
      },
      createdAt: {
        // date when the permission was created
        type: DataTypes.DATE, // date data type
      },
      updatedAt: {
        // date when the permission was last updated
        type: DataTypes.DATE, // date data type
      },
    },
    { sequelize }
  );
  //
};
