import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column("integer", {
    default: 0,
    comment: " 0-inactive 1-active 2-deactivated",
  })
  status: number | undefined;

  @Column("integer", { default: 0, comment: "" })
  acceptTerms: Number | undefined;

  @Column("integer", { default: 0, comment: "" })
  verified: Number | undefined;
}
