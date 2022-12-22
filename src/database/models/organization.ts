// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface OrganizationAddModel {
  id?: number;
  name: string;
}
//interface for the Organization model
export interface OrganizationModel {
  id?: number;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  phone: string;
  email: string;
  website: string;
  registrationNumber: string;
  vatNumber: string;
  logo: string;
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
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    phone: string;
    email: string;
    website: string;
    registrationNumber: string;
    vatNumber: string;
    logo: string;
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
      address: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      phone: "",
      email: "",
      website: "",
      registrationNumber: "",
      vatNumber: "",
      logo: "",
    },
    { sequelize }
  );
  //
};
