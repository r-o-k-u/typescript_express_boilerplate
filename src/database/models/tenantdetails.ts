// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface TenantDetailsAddModel {
  id?: number;
  status: string;
  name: string;
}

export interface TenantDetailsModel {
  id?: number;
  status: string;
  tenantId: number;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}

export interface TenantDetailsViewModel {
  id?: number;
  status: string;
  name: string;
}

//export class TenantDetails extends Model<TenantDetailsModel, TenantDetailsCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class TenantDetails
    extends Model<TenantDetailsModel>
    implements TenantDetailsModel
  {
    tenantId: number;
    key: string;
    value: string;
    name: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      TenantDetails.belongsTo(models.Tenant, { targetKey: "id" });
    }
  }
  TenantDetails.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      createdAt: "",
      updatedAt: "",
      status: "",
      tenantId: "",
      key: "",
      value: "",
    },
    { sequelize }
  );
  //
};
