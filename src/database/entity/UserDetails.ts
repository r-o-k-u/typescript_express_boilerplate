import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";
@Entity("user_details")
export class UserDetails {
  @PrimaryGeneratedColumn()
  id!: number | undefined;

  @Column("varchar", { length: 200, comment: "" })
  first_name: string | undefined;

  @Column("varchar", { length: 200, comment: "" })
  middle_name: string | undefined;

  @Column("varchar", { length: 200, comment: "" })
  last_name: string | undefined;

  @Column("varchar", { length: 200, comment: "" })
  email: string | undefined;

  @Column("integer", { nullable: false, unique: true, comment: "" })
  id_number: number | undefined;

  @Column("varchar", { nullable: true, unique: true, comment: "" })
  phone_number: string | undefined;

  @Column("date", { nullable: true, comment: "" })
  date_of_birth: Date | undefined;

  @Column("varchar", { length: 200, nullable: true, comment: "" })
  address1: string | undefined;

  @Column("varchar", { length: 200, nullable: true, comment: "" })
  address2: string | undefined;

  @Column("varchar", { nullable: false, comment: "" })
  gender: string | undefined;

  @Column("varchar", { length: 200, nullable: true, comment: "" })
  password: string | undefined;

  @Column("varchar", { nullable: true, comment: "" })
  id_pic_front: string | undefined;

  @Column("varchar", { nullable: true, comment: "" })
  id_pic_back: string | undefined;

  @Column("varchar", { nullable: true, comment: "" })
  passport_pic: string | undefined;

  @Column()
  @CreateDateColumn({ name: "created_at" })
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt!: Date;

  @ManyToOne(() => User, (user) => user.users)
  user: any | undefined;
}
