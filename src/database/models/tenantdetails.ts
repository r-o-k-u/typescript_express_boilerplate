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

interface TenantDetailAttributes {
  id: number;
  name: string;
}

interface TenantDetailCreationAttributes
  extends Optional<TenantDetailAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "tenant_details",
})
export class TenantDetail extends Model<
  TenantDetailAttributes,
  TenantDetailCreationAttributes
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
