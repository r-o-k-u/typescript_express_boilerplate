import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column("varchar", { length: 200 })
  firstName: string | undefined;

  @Column("varchar", { length: 200 })
  lastName: string | undefined;

  @Column("varchar", { length: 200 })
  age: number | undefined;
}
