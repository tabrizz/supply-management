import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getConnection } from "typeorm";
import bcrypt from "bcryptjs";
import { User } from "../../entity/hr-management/User";

export class AuthController {
  // private static userRepository = getConnection("hr-management").getRepository(
  //   User
  // );

  static login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userRepository = getConnection("hr-management").getRepository(User);
    const user = await userRepository.findOne({
      where: { email }
    });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return null;
    }
    console.log(valid);

    req.session!.userId = user.id;
    console.log(user);

    return user;
  };

  /* async register(req: Request, res: Response) {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.userRepository.save({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    return user;
  } */
}
