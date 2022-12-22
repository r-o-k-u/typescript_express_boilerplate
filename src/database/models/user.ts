// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";
/**
 * User
 * @remarks
 * This model represents a user of the system. It includes fields such as id, email, password,
 *  firstName, lastName, phone, avatar, twoFactorAuth, emailVerified, phoneVerified,
 * tenantId, createdAt, and updatedAt.
 */
export interface IUser {
  id: number; // ID for the user (primary key)
  tenantId: number; // ID for the tenant that the user belongs to (foreign key)
  username: string; // Unique username for the user
  password: string; // Hashed password for the user
  email: string; // Email address for the user
  firstName: string; // First name of the user
  lastName: string; // Last name of the user
  phone: string; // Phone number for the user
  address1: string; // First line of the user's address
  address2: string; // Second line of the user's address (optional)
  city: string; // City of the user's address
  state: string; // State or region of the user's address
  zip: string; // Zip code of the user's address
  country: string; // Country of the user's address
  createdAt: Date; // Timestamp for when the user was created
  updatedAt: Date; // Timestamp for when the user was last updated
  lastLoginAt: Date; // Timestamp for when the user last logged in
  status: string; // Status of the user (e.g. "active", "inactive", "suspended")
  twoFactorAuth: boolean; // Whether the user has enabled two-factor authentication
  emailVerified: boolean; // Whether the user's email address has been verified
  phoneVerified: boolean; // Whether the user's phone number has been verified
  avatar: string; // URL for the user's avatar image
}

//export class User extends Model<UserModel, UserCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * User:
   * @remarks
   * This class represents the User model, which is used to store information about individual users of the API.
   *  It includes fields such as id, email, password, and firstName.
   */
  class User extends Model<IUser> implements IUser {
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
    tenantId: number; // ID for the tenant that the user belongs to (foreign key)
    phoneVerified: boolean;
    twoFactorAuth: boolean;
    emailVerified: boolean;
    id: CreationOptional<number>;
    username: string; // Unique username for the user
    password: string; // Hashed password for the user
    email: string; // Email address for the user
    firstName: string; // First name of the user
    lastName: string; // Last name of the user
    phone: string; // Phone number for the user
    address1: string; // First line of the user's address
    address2: string; // Second line of the user's address (optional)
    city: string; // City of the user's address
    state: string; // State or region of the user's address
    zip: string; // Zip code of the user's address
    country: string; // Country of the user's address
    lastLoginAt: Date; // Timestamp for when the user last logged in
    status: string; // Status of the user (e.g. "active", "inactive", "suspended")
    static associate(models: any) {
      // User belongs to a Tenant
      User.belongsTo(models.Tenant, {
        foreignKey: "tenantId",
        as: "tenant",
      });

      User.hasMany(models.AuditLog, {
        foreignKey: "userId",
        as: "logs",
      });
      // User has many UserDetails
      User.hasMany(models.UserDetail, {
        foreignKey: "userId",
        as: "detail",
      });
      // User belongs to many UserGroups through UserGroup
      User.belongsToMany(models.UserGroup, { through: "UserGroup" });
      // User belongs to many AuthRoles through UserRole
      User.belongsToMany(models.AuthRole, { through: "UserRole" });
    }
  }
  User.init(
    {
      // ID for the user (primary key)
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
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
      },
      // Avatar image for the user
      avatar: {
        type: DataTypes.STRING,
      },
      // Two-factor authentication enabled for the user
      twoFactorAuth: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      // Email verification status for the user
      emailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      phoneVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      // ID for the tenant that the user belongs to (foreign key)
      tenantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "tenants",
          key: "id",
        },
      },
      // Unique username for the user
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      address1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: "",
      updatedAt: "",
      lastLoginAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize }
  );
  //
};
