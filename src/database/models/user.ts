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

interface UserAttributes {
  id: number;
  name: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "users",
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
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
