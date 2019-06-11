import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable
} from "typeorm";
import { IsEmail, IsNotEmpty, MinLength, MaxLength } from "class-validator";
import bcrypt from "bcryptjs";
import { Permission } from "./Permission";
import { Role } from "./Role";

@Entity({ database: "hr-management" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({
    message: "Los nombres son requeridos."
  })
  @MinLength(3, {
    message: "El campo de nombres es muy corto."
  })
  @MaxLength(30, {
    message: "El campo de nombres es demasiado largo."
  })
  firstName: string;

  @Column()
  @IsNotEmpty({
    message: "Los apellidos son requeridos."
  })
  @MinLength(3, {
    message: "El campo de apellidos es muy corto."
  })
  @MaxLength(30, {
    message: "El campo de apellidos es demasiado largo."
  })
  lastName: string;

  @Column({ unique: true })
  @IsEmail(undefined, {
    message: "Debe ingresar un email válido."
  })
  @IsNotEmpty({
    message: "El email es requerido."
  })
  email: string;

  @Column()
  @MinLength(8, {
    message: "La contraseña debe tener 8 caracteres como mínimo."
  })
  @MaxLength(15, {
    message: "La contraseña debe tener 15 caracteres como máximo."
  })
  password: string;

  @Column({ default: true })
  status: boolean;

  @ManyToMany(type => Role)
  @JoinTable()
  roles: Role[];

  @ManyToMany(type => Permission)
  @JoinTable()
  permissions: Permission[];

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }
}
