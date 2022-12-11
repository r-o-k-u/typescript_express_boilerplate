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

interface OrganizationAttributes {
  id: number;
  name: string;
}

interface OrganizationCreationAttributes
  extends Optional<OrganizationAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "organizations",
})
export class Organization extends Model<
  OrganizationAttributes,
  OrganizationCreationAttributes
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
}
