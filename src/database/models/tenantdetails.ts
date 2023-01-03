// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface ITenantDetails {
  id: number; // ID for the tenant details (primary key)
  tenantId: number; // ID for the tenant (foreign key)
  databaseName: string; // Name of the database for the tenant
  domainName: string; // Domain name for the tenant
  email: string; // Email address for the tenant
  password: string; // Password for the tenant
  phone: string; // Phone number for the tenant
  address: string; // Address for the tenant
  city: string; // City for the tenant
  country: string; // Country for the tenant
}

export interface ITenantDetailsView {
  id?: number;
  status: string;
  name: string;
}

//export class TenantDetails extends Model<TenantDetailsModel, TenantDetailsCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class TenantDetails extends Model<ITenantDetails> implements ITenantDetails {
    tenantId: number; // ID for the tenant (foreign key)
    databaseName: string; // Name of the database for the tenant
    domainName: string; // Domain name for the tenant
    email: string; // Email address for the tenant
    password: string; // Password for the tenant
    phone: string; // Phone number for the tenant
    address: string; // Address for the tenant
    city: string; // City for the tenant
    country: string; // Country for the tenant
    id: CreationOptional<number>; // ID for the tenant details (primary key)
    static associate(models: any) {
      TenantDetails.belongsTo(models.Tenant, {
        foreignKey: "tenantId",
        as: "tenant",
      });
    }
  }
  TenantDetails.init(
    {
      // ID for the tenant details (primary key)
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: "ID for the tenant details (primary key)",
      },
      // Email address for the tenant
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "true",
        comment: "Email address for the tenant",
      },
      // Name of the database for the tenant
      databaseName: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Name of the database for the tenant",
      },
      // Domain name for the tenant
      domainName: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Domain name for the tenant",
      },
      // Password for the tenant
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Password for the tenant",
      },
      // Phone number for the tenant
      phone: {
        type: DataTypes.STRING,
        comment: "Phone number for the tenant ",
      },
      // Address for the tenant
      address: {
        type: DataTypes.STRING,
        comment: "Address for the tenant ",
      },
      // City for the tenant
      city: {
        type: DataTypes.STRING,
        comment: "City for the tenant ",
      },
      // Country for the tenant
      country: {
        type: DataTypes.STRING,
        comment: "Country for the tenant ",
      },
      // ID for the tenant (foreign key)
      tenantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "ID for the tenant (foreign key) ",
        /* references: {
          model: "tenants",
          key: "id",
        }, */
      },
    },
    { sequelize, paranoid: true }
  );
  //
  return TenantDetails;
};
