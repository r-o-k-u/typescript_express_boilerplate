import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  @Column("varchar", {
    length: 200,
    nullable: false,
    unique: true,
    comment: "",
  })
  token: string | undefined;

  @Column("date", { nullable: false, comment: "" })
  expires: Date | undefined;

  @Column("int4", { nullable: false, comment: "" })
  user: Number | undefined;

  @Column("varchar", {
    length: 200,
    nullable: false,
    comment: "refresh , reset , verification",
  })
  type: string | undefined;

  @Column("boolean", { nullable: false, comment: "" })
  revoked: string | undefined;

  @Column("varchar", { length: 200, nullable: false, comment: "" })
  revoked_by_ip: string | undefined;

  @Column("varchar", { length: 200, nullable: false, comment: "" })
  replaced_by_token: string | undefined;

  @Column("boolean", { nullable: false, comment: "" })
  is_expired: string | undefined;

  @Column("boolean", { nullable: false, comment: "" })
  is_active: string | undefined;

  @Column()
  @CreateDateColumn({ name: "created_at" })
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt!: Date;
}
