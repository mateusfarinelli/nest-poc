import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("persons")
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
