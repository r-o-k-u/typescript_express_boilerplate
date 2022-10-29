import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class UserGroups {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column("int4", { comment: "" })
  user: number | undefined;

  @Column("int4", { comment: "" })
  group: number | undefined;

  @Column()
  @CreateDateColumn({ name: "created_at" })
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt!: Date;
}
