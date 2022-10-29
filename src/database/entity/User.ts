import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";

import { UserDetails } from "./UserDetails";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column("integer", {
    default: 0,
    comment: " 0-inactive 1-active 2-deactivated",
  })
  status: number | undefined;

  @Column("boolean", { default: false, comment: "" })
  accept_terms: Boolean | undefined;

  @Column("boolean", { default: false, comment: "" })
  verified: Boolean | undefined;

  @Column("varchar", { default: 1, comment: "1.app 2.Web" })
  channel: String | undefined;

  @Column()
  @CreateDateColumn({ name: "created_at" })
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt!: Date;

  @OneToMany(() => UserDetails, (detail) => detail.user) // note: we will create user property in the UserDetails class
  users: UserDetails[] | undefined;
}
