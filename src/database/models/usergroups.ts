// @/models.ts
import { Tenant } from "./tenant";
import { Optional } from "sequelize";
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

interface UserGroupAttributes {
  id: number;
  name: string;
}

interface UserGroupCreationAttributes
  extends Optional<UserGroupAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "user_groups",
})
export class UserGroup extends Model<
  UserGroupAttributes,
  UserGroupCreationAttributes
> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  })
  active!: boolean;
  @ForeignKey(() => Tenant)
  @Column
  organizationId: number;

  @BelongsTo(() => Tenant)
  organization: Tenant;
}
