import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { Requirement } from "./Requirement";

@Entity({ database: "supply-management" })
export default class RequirementDetail {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  color: string;

  @Column()
  unit: string;

  @Column("decimal", { precision: 10, scale: 3 })
  requiredQuantity: number;

  @Column("decimal", { precision: 10, scale: 3 })
  observations: number;

  @Column()
  requirementId: number;

  @Column()
  approved: boolean;

  @ManyToOne(type => Requirement, requirement => requirement.requirementDetails)
  requirement: Requirement;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
