// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface TenantAddModel {
  id?: number;
  name: string;
}

export interface TenantModel {
  id?: number;
  name: string;
  databaseName: string;
  schemaName: string;
  domainName: string;
  createdAt: string;
  updatedAt: string;
}

export interface TenantViewModel {
  id: number;
  name: string;
}

//export class Tenant extends Model<TenantModel, TenantCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Tenant extends Model<TenantModel> implements TenantModel {
    databaseName: string;
    schemaName: string;
    domainName: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      Tenant.belongsTo(models.Organization, { targetKey: "id" });
      Tenant.hasMany(models.User);
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
      name: "",
      createdAt: "",
      updatedAt: "",
      databaseName: "",
      schemaName: "",
      domainName: "",
    },
    { sequelize }
  );
  //
};
