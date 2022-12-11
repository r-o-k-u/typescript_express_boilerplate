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

interface AuditLogAttributes {
  id: number;
  name: string;
}

interface AuditLogCreationAttributes
  extends Optional<AuditLogAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "audit_logs",
})
export class AuditLog extends Model<
  AuditLogAttributes,
  AuditLogCreationAttributes
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
