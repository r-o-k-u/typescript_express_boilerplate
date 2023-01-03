// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

/**
 * Tenant:
 * @remarks
 * This model represents a tenant within an organization that is using the system.
 * It includes fields such as id, name, description, organizationId, code, databaseName,
 * domainName, createdAt, and updatedAt.
 */
export interface ITenant {
  id: number; // ID for the tenant (primary key)
  name: string; // Name for the tenant
  status: string; // Status for the tenant (active, inactive, etc.)
  code: string; // Code for the tenant
  organizationId: number; // ID for the organization the tenant belongs to (foreign key)
}

export interface ITenantView {
  id: number;
  name: string;
}

//export class Tenant extends Model<TenantModel, TenantCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * Tenant:
   * @remarks
   * This class represents the Tenant model,
   * which is used to store information about tenants that use the API.
   * It includes fields such as id, name, and description.
   */
  class Tenant extends Model<ITenant> implements ITenant {
    name: string; // Name for the tenant
    status: string; // Status for the tenant (active, inactive, etc.)
    code: string; // Code for the tenant
    organizationId: number; // ID for the organization the tenant belongs to (foreign key)
    id: CreationOptional<number>; // ID for the tenant (primary key)
    static associate(models: any) {
      Tenant.belongsTo(models.Organization, {
        foreignKey: "organizationId",
        as: "organization",
      });
      Tenant.hasMany(models.User, {
        foreignKey: "tenantId",
        as: "users",
      });
      Tenant.hasOne(models.TenantDetails, {
        foreignKey: "tenantId",
        as: "details",
      });
      Tenant.belongsToMany(models.Modules, { through: "TenantModule" });
    }
  }
  Tenant.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      // Name for the tenant
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Name for the tenant",
      },

      // Status for the tenant (active, inactive, etc.)
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "Status for the tenant (1.active,0.inactive, etc.)",
      },
      // Code for the tenant
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "true",
        comment: "Code for the tenant",
      },
      // ID for the organization the tenant belongs to (foreign key)
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "ID for the organization the tenant belongs to (foreign key)",
        /* references: {
          model: "organization",
          key: "id",
        }, */
      },
    },
    { sequelize, paranoid: true }
  );
  //
  return Tenant;
};
