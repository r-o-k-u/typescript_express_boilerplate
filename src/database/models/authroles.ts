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

interface AuthRoleAttributes {
  id: number;
  name: string;
}

interface AuthRoleCreationAttributes
  extends Optional<AuthRoleAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "auth_roles",
})
export class AuthRole extends Model<
  AuthRoleAttributes,
  AuthRoleCreationAttributes
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
