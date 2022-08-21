import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column("int4", { comment: "" })
  user_id: number | undefined;

  @Column("int4", { comment: "" })
  role_id: number | undefined;
}
