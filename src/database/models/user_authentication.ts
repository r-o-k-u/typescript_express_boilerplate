// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";
/**
 * User
 * @remarks
 * This model represents a user of the system. It includes fields such as id, email, password,
 *  firstName, lastName, phone, avatar, twoFactorAuth, emailVerified, phoneVerified,
 * tenantId, createdAt, and updatedAt.
 */
export interface IUserAuthentication {
  id: number; // ID for the user (primary key)
  userId: number; // ID for the user (foreign key)
  tenantId: number; // ID for the tenant that the user belongs to (foreign key)
  passwordHash: string; // user's hashed password
  apiKey: string; // apiKey
  apiSecret: string; // apiSecret
  accessKey: string; // accessKey
  lastLoginAt: Date; // Timestamp for when the user last logged in
  status: string; // Status of the user (e.g. "active", "inactive", "suspended")
  twoFactorAuth: boolean; // Whether the user has enabled two-factor authentication
  emailVerified: boolean; // Whether the user's email address has been verified
  phoneVerified: boolean; // Whether the user's phone number has been verified
}

//export class User extends Model<UserModel, UserCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * User:
   * @remarks
   * This class represents the User model, which is used to store information about individual users of the API.
   *  It includes fields such as id, email, password, and firstName.
   */
  class UserAuthentication
    extends Model<IUserAuthentication>
    implements IUserAuthentication
  {
    id: CreationOptional<number>; // ID for the record (primary key)
    userId: number; // ID for the user authentication (foreign key)
    tenantId: number; // ID for the tenant that the user belongs to (foreign key)
    passwordHash: string; // user's hashed password
    apiKey: string; // apiKey
    apiSecret: string; // apiSecret
    accessKey: string; // accessKey
    lastLoginAt: Date; // Timestamp for when the user last logged in
    status: string; // Status of the user (e.g. "active", "inactive", "suspended")
    twoFactorAuth: boolean; // Whether the user has enabled two-factor authentication
    emailVerified: boolean; // Whether the user's email address has been verified
    phoneVerified: boolean; // Whether the user's phone number has been verified
    static associate(models: any) {
      // User belongs to a Tenant
      UserAuthentication.belongsTo(models.Tenant, {
        foreignKey: "tenantId",
        as: "tenant",
      });
      // User has many UserDetails
      UserAuthentication.hasMany(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      UserAuthentication.hasMany(models.UserDetail, {
        foreignKey: "userId",
        as: "details",
      });
    }
  }
  UserAuthentication.init(
    {
      // ID for the user authentication (foreign key)
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: "ID for the user authentication (foreign key)",
      },
      // Two-factor authentication enabled for the user
      twoFactorAuth: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        comment: "Two-factor authentication enabled for the user ",
      },
      // Email verification status for the user
      emailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        comment: "Email verification status for the user ",
      },
      // Phone verification status for the user
      phoneVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        comment: "Phone verification status for the user",
      },
      // ID for the tenant that the user belongs to (foreign key)
      tenantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "ID for the tenant that the user belongs to (foreign key) ",
        /*  references: {
          model: "tenants",
          key: "id",
        }, */
      },
      //lastLoginAt
      lastLoginAt: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "Last time user logged in",
      },
      //status
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        comment:
          "Status of the User (e.g.  0.inactive,1.active, 2.dormant 3.blocked 4.other) ",
      },
      //userId
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "ID for the user that the record belongs to (foreign key) ",
        /*  references: {
          model: "user",
          key: "id",
        }, */
      },
      //user's hashed password
      passwordHash: {
        type: DataTypes.STRING,
        unique: "true",
        comment: "user's hashed password ",
      },
      //apiKey
      apiKey: {
        type: DataTypes.STRING,
        unique: "true",
        comment: "apiKey ",
      },
      //apiSecret
      apiSecret: {
        type: DataTypes.STRING,
        unique: "true",
        comment: "apiSecret ",
      },
      //accessKey
      accessKey: {
        type: DataTypes.STRING,
        unique: "true",
        comment: "accessKey ",
      },
    },
    { sequelize, paranoid: true }
  );
  //
  return UserAuthentication;
};
