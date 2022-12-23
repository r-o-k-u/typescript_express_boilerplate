// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";
/**
 * UserDetail
 * @remarks
 * This model represents additional details about a user of the system. It includes fields such as id,
 *  userId, addressLine1, addressLine2, city, state, zipCode, country, dob, createdAt, and updatedAt.
 */
export interface IUserDetail {
  id: number; // ID for the user details (primary key)
  userId: number; // ID for the user (foreign key)
  tenantId: number; // ID for the tenant that the user belongs to (foreign key)
  dob: Date; // Date of birth for the user
  gender: string; // Gender for the user
  address: string; // Address for the user
  city: string; // City for the user
  country: string; // Country for the user
  username: string; // Unique username for the user
  password: string; // Hashed password for the user
  email: string; // Email address for the user
  firstName: string; // First name of the user
  lastName: string; // Last name of the user
  phone: string; // Phone number for the user
  address1: string; // First line of the user's address
  address2: string; // Second line of the user's address (optional)
  state: string; // State or region of the user's address
  zip: string; // Zip code of the user's address
  avatar: string; // URL for the user's avatar image
}

export interface IUserDetailView {
  id: number;
  email: string;
}

//export class UserDetail extends Model<UserDetailModel, UserDetailCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * UserDetail:
   * @remarks
   * This class represents the UserDetail model, which is used to store additional information about users of the API.
   * It includes fields such as id, userId, and lastName.
   */
  class UserDetail extends Model<IUserDetail> implements IUserDetail {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    address1: string;
    address2: string;
    state: string;
    zip: string;
    avatar: string;
    userId: number;
    dob: Date;
    gender: string;
    address: string;
    city: string;
    country: string;
    status: string;
    tenantId: number;
    key: string;
    value: string;
    id: CreationOptional<number>;
    static associate(models: any) {}
  }
  UserDetail.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: " ",
      },
      tenantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "ID for the tenant that the user belongs to (foreign key) ",
        /*  references: {
          model: "tenants",
          key: "id",
        }, */
      },
      // ID for the user (foreign key)
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: " ",
        /* references: {
          model: "users",
          key: "id",
        }, */
      },
      // Email address for the user
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // Password hash for the user
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // First name for the user
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Last name for the user
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Phone number for the user
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: " ",
      },
      // Avatar image for the user
      avatar: {
        type: DataTypes.STRING,
        comment: " ",
      },
      // Unique username for the user
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: " ",
      },
      address1: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: " ",
      },
      address2: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: " ",
      },
      // City for the user
      city: {
        type: DataTypes.STRING,
        comment: " ",
      },
      // Country for the user
      country: {
        type: DataTypes.STRING,
        comment: " ",
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: " ",
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: " ",
      },

      // Date of birth for the user
      dob: {
        type: DataTypes.DATEONLY,
        comment: " ",
      },
      // Gender for the user
      gender: {
        type: DataTypes.STRING,
        comment: " ",
      },
      // Address for the user
      address: {
        type: DataTypes.STRING,
        comment: " ",
      },
    },
    { sequelize }
  );
  //

  return UserDetail;
};
