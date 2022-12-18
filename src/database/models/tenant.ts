// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface TenantAddModel {
  id?: number;
  name: string;
}

export interface TenantModel {
  id?: number;
  name: string;
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
    },
    { sequelize }
  );
  //
};
