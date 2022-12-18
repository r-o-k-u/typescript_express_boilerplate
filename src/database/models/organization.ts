// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface OrganizationAddModel {
  id?: number;
  name: string;
}

export interface OrganizationModel {
  id?: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrganizationViewModel {
  id: number;
  name: string;
}

//export class Organization extends Model<OrganizationModel, OrganizationCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Organization
    extends Model<OrganizationModel>
    implements OrganizationModel
  {
    name: string;
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      Organization.hasMany(models.Tenant);
    }
  }
  Organization.init(
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
