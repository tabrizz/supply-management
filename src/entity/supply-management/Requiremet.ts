import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import RequirementDetail from "./RequirementDetail";

@Entity({ database: "supply-management" })
export class Requirement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  notes: string;

  @Column()
  approved: boolean;

  @Column()
  archived: boolean;

  @Column()
  isPurchaseable: boolean;

  @Column()
  agencyId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    type => RequirementDetail,
    requirementDetail => requirementDetail.requirement,
    { eager: true }
  )
  requirementDetails: RequirementDetail;

  @ManyToOne(type => Requirement, requirement => requirement.children)
  parent: Requirement;

  @OneToMany(type => Requirement, requirement => requirement.parent)
  children: Requirement[];
}
