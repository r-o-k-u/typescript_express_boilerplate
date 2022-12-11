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

interface AuthPermissionAttributes {
  id: number;
  name: string;
}

interface AuthPermissionCreationAttributes
  extends Optional<AuthPermissionAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "auth_permissions",
})
export class AuthPermission extends Model<
  AuthPermissionAttributes,
  AuthPermissionCreationAttributes
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
