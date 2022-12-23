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
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: " ",
      },
      // Name for the organization
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Name for the organization",
      },
      // Email address for the organization
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: "Email address for the organization",
      },
      // Password for the organization
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Password for the organization",
      },
      // Status for the organization (active, inactive, etc.)
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Status for the organization (active, inactive, etc.)",
      },
      // Website for the organization
      website: {
        type: DataTypes.STRING,
        comment: "Website for the organization",
      },
      // Registration number for the organization
      registrationNumber: {
        type: DataTypes.STRING,
        comment: "Registration number for the organization",
      },
      // Logo for the organization
      logo: {
        type: DataTypes.STRING,
        comment: "Logo for the organization",
      },
      // Address for the organization
      address: {
        type: DataTypes.STRING,
        comment: "Address for the organization",
      },
      // City for the organization
      city: {
        type: DataTypes.STRING,
        comment: "City for the organization",
      },
      // State for the organization
      state: {
        type: DataTypes.STRING,
        comment: "State for the organization",
      },
      // Country for the organization
      country: {
        type: DataTypes.STRING,
        comment: "Country for the organization ",
      },
      // ZIP code for the organization
      zipCode: {
        type: DataTypes.STRING,
        comment: "ZIP code for the organization ",
      },
      // Phone number for the organization (optional)
      phoneNumber: {
        type: DataTypes.STRING,
        comment: "Phone number for the organization (optional) ",
      },
      // Description for the organization (optional)
      description: {
        type: DataTypes.STRING,
        comment: "Description for the organization (optional) ",
      },
    },
    { sequelize }
  );
  //

  return Organization;
};
