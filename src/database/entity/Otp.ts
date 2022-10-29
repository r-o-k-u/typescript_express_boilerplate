import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Logins {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column("varchar", {
    length: 200,
    nullable: false,
    unique: true,
    comment: "",
  })
  otpHash: string | undefined;

  @Column("date", { nullable: false, comment: "" })
  expires: Date | undefined;

  @Column("int4", { nullable: false, comment: "" })
  user: Number | undefined;

  @Column("varchar", {
    length: 200,
    nullable: false,
    comment: "Mobile , Email , Other",
  })
  channel: string | undefined;

  @Column("boolean", { nullable: false, comment: "" })
  revoked: string | undefined;

  @Column("varchar", { length: 200, nullable: false, comment: "" })
  revoked_by_ip: string | undefined;

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
