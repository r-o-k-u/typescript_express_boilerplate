import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserDetails {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column("int4", { comment: "" })
  user: number | undefined;

  @Column("varchar", { length: 200, comment: "" })
  firstName: string | undefined;

  @Column("varchar", { length: 200, comment: "" })
  middleName: number | undefined;

  @Column("varchar", { length: 200, comment: "" })
  lastName: string | undefined;

  @Column("varchar", { length: 200, comment: "" })
  email: string | undefined;

  @Column("integer", { nullable: false, unique: true, comment: "" })
  id_number: number | undefined;

  @Column("integer", { nullable: true, unique: true, comment: "" })
  phone_number: number | undefined;

  @Column("date", { nullable: true, comment: "" })
  date_of_birth: Date | undefined;

  @Column("varchar", { length: 200, nullable: true, comment: "" })
  address1: string | undefined;

  @Column("varchar", { length: 200, nullable: true, comment: "" })
  address2: number | undefined;

  @Column("varchar", { nullable: false, comment: "" })
  gender: string | undefined;

  @Column("varchar", { length: 200, nullable: true, comment: "" })
  password_hash: string | undefined;

  @Column("varchar", { nullable: true, comment: "" })
  id_pic_front: string | undefined;

  @Column("varchar", { nullable: true, comment: "" })
  id_pic_back: string | undefined;

  @Column("varchar", { nullable: true, comment: "" })
  passport_pic: string | undefined;
}
