// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

/**
 *
 * UserGroup:
 * @remarks
 * This model represents a group that a user belongs to.
 *  It includes fields such as id, userId, groupId, createdAt, and updatedAt.
 */
export interface IUserGroup {
  id: number; // ID for the user group (primary key)
  userId: number; // ID for the user (foreign key)
  groupId: number; // ID for the group (foreign key)
  tenantId: number; // ID for the tenant that the user belongs to (foreign key)
}

export interface IUserGroupView {
  id?: number;
  status: string;
  name: string;
}

//export class UserGroup extends Model<UserGroupModel, UserGroupCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * UserGroup:
   * @remarks
   * This class represents the UserGroup model,
   * which is used to define the groups that a user belongs to. It includes fields such as id, userId, and groupId.
   */
  class UserGroup extends Model<IUserGroup> implements IUserGroup {
    tenantId: number;
    userId: number;
    groupId: number;
    id: CreationOptional<number>;
    static associate(models: any) {}
  }
  UserGroup.init(
    {
      // ID for the user group (primary key)
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: " ",
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
      // ID for the group (foreign key)
      groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: " ",
        /* references: {
          model: "groups",
          key: "id",
        }, */
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
    },
    { sequelize }
  );
  //
  return UserGroup;
};
