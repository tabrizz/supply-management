import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ database: "supply-management" })
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  brand: string;

  @Column()
  quantity: number;
}
