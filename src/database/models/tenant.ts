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
  email: string; // Email address for the tenant
  password: string; // Password for the tenant
  status: string; // Status for the tenant (active, inactive, etc.)
  code: string; // Code for the tenant
  databaseName: string; // Name of the database for the tenant
  domainName: string; // Domain name for the tenant
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
    name: string;
    email: string;
    password: string;
    status: string;
    code: string;
    databaseName: string;
    domainName: string;
    organizationId: number;
    id: CreationOptional<number>;
    static associate(models: any) {
      Tenant.belongsTo(models.Organization, {
        foreignKey: "organizationId",
        as: "organization",
      });
      Tenant.hasMany(models.User, {
        foreignKey: "tenantId",
        as: "users",
      });
    }
  }
  Tenant.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      // Name for the tenant
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Email address for the tenant
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // Password for the tenant
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Status for the tenant (active, inactive, etc.)
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Code for the tenant
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // Name of the database for the tenant
      databaseName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Domain name for the tenant
      domainName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // ID for the organization the tenant belongs to (foreign key)
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "organizations",
          key: "id",
        },
      },
    },
    { sequelize }
  );
  //
};
