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
  city: string; // City for the user
  country: string; // Country for the user
  email: string; // Email address for the user
  phone: string; // Phone number for the user
  address1: string; // First line of the user's address
  address2: string; // Second line of the user's address (optional)
  state: string; // State or region of the user's address
  zip: string; // Zip code of the user's address
  avatar: string; // URL for the user's avatar image
  status: number; // Status of the record ("0.inactive" "2.active", "3.suspended")
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
    id: CreationOptional<number>; // ID for the user details (primary key)
    userId: number; // ID for the user (foreign key)
    tenantId: number; // ID for the tenant that the user belongs to (foreign key)
    dob: Date; // Date of birth for the user
    gender: string; // Gender for the user
    address: string; // Address for the user
    city: string; // City for the user
    country: string; // Country for the user
    email: string; // Email address for the user
    phone: string; // Phone number for the user
    address1: string; // First line of the user's address
    address2: string; // Second line of the user's address (optional)
    state: string; // State or region of the user's address
    zip: string; // Zip code of the user's address
    avatar: string; // URL for the user's avatar image,
    status: number; // Status of the record ("0.inactive" "2.active", "3.suspended")
    static associate(models: any) {
      UserDetail.belongsTo(models.Tenant, {
        foreignKey: "tenantId",
        as: "tenant",
      });
      UserDetail.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      UserDetail.hasOne(models.UserAuthentication, {
        foreignKey: "userId",
        as: "authentication",
      });
    }
  }
  UserDetail.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: "ID for the user details (primary key)",
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
        comment: "ID for the user that the details belongs to (foreign key) ",
        /* references: {
          model: "users",
          key: "id",
        }, */
      },
      // Email address for the user
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Users email",
        unique: "true",
      },
      // Phone number for the user
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: "true",
        comment: "Users phone number",
      },
      // Avatar image for the user
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "URL for the user's avatar image",
      },
      address1: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "First line of the user's address",
      },
      address2: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Second line of the user's address (optional) ",
      },
      // City for the user
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "City for the user",
      },
      // Country for the user
      country: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Country for the user",
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "State or region of the user's address",
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Zip code of the user's address",
      },

      // Date of birth for the user
      dob: {
        type: DataTypes.DATEONLY,
        comment: "Date of birth for the user",
        allowNull: true,
      },
      // Gender for the user
      gender: {
        type: DataTypes.STRING,
        comment: "Gender for the user",
        allowNull: true,
      },
      //Status of the record
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        comment: "Status of the record (0.inactive,2.active, 3.suspended)",
      },
    },
    { sequelize, paranoid: true }
  );
  //

  return UserDetail;
};
