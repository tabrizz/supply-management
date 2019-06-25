import { Request, Response } from "express";
import { validate } from "class-validator";
import { getConnection } from "typeorm";
import bcrypt from "bcryptjs";
import { User } from "../../entity/hr-management/User";

export class AuthController {
  // private static userRepository = getConnection("hr-management").getRepository(User);

  static async login(req: Request, res: Response) {
    const userRepository = getConnection("hr-management").getRepository(User);
    const { email, password } = req.body;
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

    req.session!.userId = user.id;

    return res.send(user);
  }

  static async register(req: Request, res: Response) {
    const userRepository = getConnection("hr-management").getRepository(User);
    const { firstName, lastName, email, password } = req.body;

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;

    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send({ data: { errors } });
      return;
    }
    await user.hashPassword();

    // const createdUser = await userRepository.save(user);

    return res.status(201).send(await userRepository.save(user));
  }
}
