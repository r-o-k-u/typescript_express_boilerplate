import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
  revokedByIp: string | undefined;

  @Column("varchar", { length: 200, nullable: false, comment: "" })
  replacedByToken: string | undefined;

  @Column("boolean", { nullable: false, comment: "" })
  isExpired: string | undefined;

  @Column("boolean", { nullable: false, comment: "" })
  isActive: string | undefined;
}
