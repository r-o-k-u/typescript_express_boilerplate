import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AuthGroups {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column("varchar", {
    length: 200,
    unique: true,
    nullable: false,
    comment: "",
  })
  name: string | undefined;

  @Column("integer", {
    default: 0,
    comment: " 0-inactive 1-active 2-deactivated",
  })
  status: number | undefined;
}
