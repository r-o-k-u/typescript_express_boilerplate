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

interface AuthGroupAttributes {
  id: number;
  name: string;
}

interface AuthGroupCreationAttributes
  extends Optional<AuthGroupAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "auth_groups",
})
export class AuthGroup extends Model<
  AuthGroupAttributes,
  AuthGroupCreationAttributes
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
