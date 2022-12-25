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
  user_code: string; // Unique hash identifying the user internally in the code oe the api
  username: string; // Unique username for the user
  tenantId: number; // ID for the tenant that the user belongs to (foreign key)
  firstName: string; // User's first name
  lastName?: string; // User's last name
  type: number; // Type of user  ("0. Normal","2.API",)
  language_id: number; // Language of the user ("0. English","2.Swahili",  "3.French")
  registrationStatus: number; // Registration status of the user ("0. incomplete","2.complete",  "3.suspended","4.cancelled")
  accountStatus: number; // Account status of the user ("0.inactive" "2.active",, "3.suspended")
  email_notification_status: number; // Email verification alerts sent  ("0.pending" "2.sent", "3.suspended")
  phone_notification_status: number; // Phone verification alerts sent  ("0.pending" "2.sent", "3.suspended")
  refereed: boolean; // States whether the user was refereed or not
  referral_code: string; // if user is referred the code used
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
    id: CreationOptional<number>; // ID for the user (primary key)
    user_code: string; // Unique hash identifying the user internally in the code oe the api
    username: string; // Unique username for the user
    tenantId: number; // ID for the tenant that the user belongs to (foreign key)
    firstName: string; // User's first name
    lastName?: string; // User's last name
    type: number; // Type of user  ("0. Normal","2.API",)
    language_id: number; // Language of the user ("0. English","2.Swahili",  "3.French")
    registrationStatus: number; // Registration status of the user ("0. incomplete","2.complete",  "3.suspended","4.cancelled")
    accountStatus: number; // Account status of the user ("0.inactive" "2.active",, "3.suspended")
    email_notification_status: number; // Email verification alerts sent  ("0.pending" "2.sent", "3.suspended")
    phone_notification_status: number; // Phone verification alerts sent  ("0.pending" "2.sent", "3.suspended")
    refereed: boolean; // States whether the user was refereed or not
    referral_code: CreationOptional<string>; // if user is referred the code used
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
      // User has many UserAuthentication
      User.hasMany(models.UserAuthentication, {
        foreignKey: "userId",
        as: "authentication",
      });
      // User belongs to many UserGroups through UserGroup
      User.belongsToMany(models.AuthGroup, { through: "UserGroup" });
      // User belongs to many AuthRoles through UserRole
      User.belongsToMany(models.AuthRole, { through: "UserRole" });
    }
  }
  User.init(
    {
      // ID for the user (primary key)
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: "ID for the user (primary key) ",
      },
      // Unique username for the user
      username: {
        type: DataTypes.STRING,
        defaultValue: false,
        comment: "Unique username for the user ",
      },
      // User's first name
      firstName: {
        type: DataTypes.STRING,
        defaultValue: false,
        comment: "User's first name ",
      },
      // User's last name
      lastName: {
        type: DataTypes.STRING,
        defaultValue: false,
        comment: "User's lat name ",
      },
      //Users language
      language_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: " Language of the user (0. English,2.Swahili,  3.French)",
      },
      // Email verification status for the user
      phone_notification_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        comment:
          "Phone verification alerts sent  (0.pending,2.sent,3.suspended)",
      },
      // Phone verification status for the user
      email_notification_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        comment:
          "Email verification alerts sent  (0.pending,2.sent,3.suspended)",
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
      //Users registration status
      registrationStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment:
          "Registration status of the user (0. incomplete,2.complete,3.suspended,4.cancelled)",
      },
      //Users code
      user_code: {
        type: DataTypes.STRING,
        allowNull: false,
        comment:
          "Unique hash identifying the user internally in the code oe the api",
      },
      //Users account status
      accountStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment:
          "Account status of the user (0.inactive ,2.active, 3.suspended)",
      },
      //User is referred or not
      refereed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        comment: "States whether the user was refereed or not",
      },
      //Users referral code
      referral_code: {
        type: DataTypes.STRING,
        comment: "if user is referred the code used",
      },
      // Type of user
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "Type of user  (0. Normal,2.API)",
      },
    },
    { sequelize, paranoid: true }
  );
  //
  return User;
};
