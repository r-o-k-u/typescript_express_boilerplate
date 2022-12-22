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
  dob: Date; // Date of birth for the user
  gender: string; // Gender for the user
  address: string; // Address for the user
  city: string; // City for the user
  country: string; // Country for the user
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
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {}
  }
  UserDetail.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      // ID for the user (foreign key)
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      // Date of birth for the user
      dob: {
        type: DataTypes.DATEONLY,
      },
      // Gender for the user
      gender: {
        type: DataTypes.STRING,
      },
      // Address for the user
      address: {
        type: DataTypes.STRING,
      },
      // City for the user
      city: {
        type: DataTypes.STRING,
      },
      // Country for the user
      country: {
        type: DataTypes.STRING,
      },
    },
    { sequelize }
  );
  //
};
