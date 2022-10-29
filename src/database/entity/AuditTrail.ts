import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class AuditTrail {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column("varchar", {
    length: 200,
    nullable: false,
    comment: "",
  })
  action: string | undefined;

  @Column("varchar", { nullable: false, comment: "" })
  session_id: Date | undefined;

  @Column("varchar", {
    length: 200,
  })
  description: string | undefined;

  @Column("int4", { nullable: false, comment: "" })
  user: Number | undefined;

  @Column()
  @CreateDateColumn({ name: "created_at" })
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt!: Date;
}
