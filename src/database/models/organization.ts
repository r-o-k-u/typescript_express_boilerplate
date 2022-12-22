// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

//interface for the Organization model
/**
 *  Organization:
 *  @remarks
 * This model represents an organization that is using the system.
 * It includes fields such as id, name, description, website,
 *  registrationNumber, logo, email, phone, addressLine1, addressLine2,
 * city, state, zipCode, country, createdAt, and updatedAt.
 */
export interface IOrganization {
  id: number; // ID for the organization (primary key)
  name: string; // Name for the organization
  email: string; // Email address for the organization
  password: string; // Password for the organization
  status: string; // Status for the organization (active, inactive, etc.)
  website: string; // Website for the organization
  registrationNumber: string; // Registration number for the organization
  logo: string; // Logo for the organization
  address: string; // Address for the organization
  city: string; // City for the organization
  state: string; // State for the organization
  country: string; // Country for the organization
  zipCode: string; // ZIP code for the organization
  phoneNumber?: string; // Phone number for the organization (optional)
  faxNumber?: string; // Fax number for the organization (optional)
  description?: string; // Description for the organization (optional)
}

export interface IOrganizationView {
  id: number;
  name: string;
}

//export class Organization extends Model<OrganizationModel, OrganizationCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * Organization:
   *  @remarks
   * This class represents the Organization model,
   *  which is used to store information about organizations that use the API.
   * It includes fields such as id, name, and description.
   */
  class Organization extends Model<IOrganization> implements IOrganization {
    name: string;
    email: string;
    password: string;
    status: string;
    website: string;
    registrationNumber: string;
    logo: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    phoneNumber?: string | undefined;
    faxNumber?: string | undefined;
    description?: string | undefined;
    id: CreationOptional<number>;
    static associate(models: any) {
      Organization.hasMany(models.Tenant, {
        foreignKey: "organizationId",
        as: "tenants",
      });
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
      // Name for the organization
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Email address for the organization
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // Password for the organization
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Status for the organization (active, inactive, etc.)
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Website for the organization
      website: {
        type: DataTypes.STRING,
      },
      // Registration number for the organization
      registrationNumber: {
        type: DataTypes.STRING,
      },
      // Logo for the organization
      logo: {
        type: DataTypes.STRING,
      },
      // Address for the organization
      address: {
        type: DataTypes.STRING,
      },
      // City for the organization
      city: {
        type: DataTypes.STRING,
      },
      // State for the organization
      state: {
        type: DataTypes.STRING,
      },
      // Country for the organization
      country: {
        type: DataTypes.STRING,
      },
      // ZIP code for the organization
      zipCode: {
        type: DataTypes.STRING,
      },
      // Phone number for the organization (optional)
      phoneNumber: {
        type: DataTypes.STRING,
      },
      // Description for the organization (optional)
      description: {
        type: DataTypes.STRING,
      },
    },
    { sequelize }
  );
  //
};
