import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { Requirement } from "./Requiremet";

@Entity({ database: "supply-management" })
export default class RequirementDetail {
  @ManyToOne(type => Requirement, requirement => requirement.requirementDetails)
  requirement: Requirement;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
