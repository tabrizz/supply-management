import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  BaseEntity
} from "typeorm";
import { Permission } from "./Permission";

@Entity({ database: "hr-management" })
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(type => Permission, permission => permission.roles, {
    eager: true
  })
  @JoinTable()
  permissions: Permission[];
}
