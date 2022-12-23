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
      lastLoginAt: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "Last time user logged in",
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment:
          "Status of the User (e.g.  0.inactive,1.active, 2.dormant 3.blocked 4.other) ",
      },
    },
    { sequelize }
  );
  //
  return User;
};
