// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface ITenantDetails {
  id: number; // ID for the tenant details (primary key)
  tenantId: number; // ID for the tenant (foreign key)
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
    tenantId: number;
    phone: string;
    address: string;
    city: string;
    country: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      TenantDetails.belongsTo(models.Tenant, {
        foreignKey: "tenantId",
        as: "tenant",
      });
    }
  }
  TenantDetails.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: " ",
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
    { sequelize }
  );
  //
  return TenantDetails;
};
