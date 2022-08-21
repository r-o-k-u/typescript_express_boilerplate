import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AuthRoles {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column("varchar", {
    length: 200,
    nullable: false,
    unique: true,
    comment: "",
  })
  name: string | undefined;

  @Column("int4", { comment: "" })
  group: number | undefined;

  @Column("integer", {
    default: 0,
    comment: " 0-inactive 1-active 2-deactivated",
  })
  status: number | undefined;
}
