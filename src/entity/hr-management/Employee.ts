import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  Entity
} from "typeorm";
import { IsEmail, IsNotEmpty, MinLength, MaxLength } from "class-validator";
import { Permission } from "./Permission";
import { Role } from "./Role";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";

@Entity({ database: "hr_management" })
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastnameFather: string;

  @Column()
  lastnameMother: string;

  @Column()
  indentityNumber: number;

  @Column()
  identityDocumentId: number;

  @Column()
  gender: string;

  @Column()
  birthdate: Date;

  @Column()
  districtId: number;

  @Column()
  provinceId: number;

  @Column()
  departmentId: number;

  @Column()
  address: string;

  @Column()
  addressReference: string;

  @Column()
  addressSketch: ImageBitmap;

  @Column()
  email: string;

  @Column()
  emailAlternative: string;

  @Column()
  status: boolean;

  @Column()
  roleId: number;

  @Column()
  phoneNumber1: number;

  @Column()
  phoneNumber2: number;

  @Column()
  phoneNumber3: number;

  @Column()
  phoneOperator1: string;

  @Column()
  phoneOperator2: string;

  @Column()
  phoneOperator3: string;

  @Column()
  phoneType1: string;

  @Column()
  phoneType2: string;

  @Column()
  phoneType3: string;

  @Column()
  photo: ImageBitmap;

  @Column()
  photoUpdatedAt: Date;

  @Column()
  admissionDate: Date;

  @Column()
  hireDate: Date;

  @Column()
  scheduledStay: number;

  @Column()
  contractPeriod: number;

  @Column()
  contractTypeId: number; //indeterminado, por necesidad de negocio, renovación, etc.

  @Column()
  contractFile: ImageBitmap;

  @Column()
  resignationDate: Date;

  @Column()
  jobTypeId: number; //ejetuvico,empleado, obrero, operario.

  @Column()
  modality: string; //tiempo completo y tiempo parcial.
}
