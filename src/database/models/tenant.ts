import { Organization } from "./organization";
// @/models.ts
import { Optional } from "sequelize";
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

interface TenantAttributes {
  id: number;
  name: string;
}

interface TenantCreationAttributes extends Optional<TenantAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "tenants",
})
export class Tenant extends Model<TenantAttributes, TenantCreationAttributes> {
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
  @ForeignKey(() => Organization)
  @Column
  organizationId: number;

  @BelongsTo(() => Organization)
  organization: Organization;
}
