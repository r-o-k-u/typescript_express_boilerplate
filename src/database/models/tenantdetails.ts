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
    static associate(models: any) {}
  }
  TenantDetails.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      // Phone number for the tenant
      phone: {
        type: DataTypes.STRING,
      },
      // Address for the tenant
      address: {
        type: DataTypes.STRING,
      },
      // City for the tenant
      city: {
        type: DataTypes.STRING,
      },
      // Country for the tenant
      country: {
        type: DataTypes.STRING,
      },
      // ID for the tenant (foreign key)
      tenantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "tenants",
          key: "id",
        },
      },
    },
    { sequelize }
  );
  //
};
