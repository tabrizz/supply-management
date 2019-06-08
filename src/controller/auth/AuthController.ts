import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getConnection } from "typeorm";
import bcrypt from "bcryptjs";
import { User } from "../../entity/hr-management/User";

export class AuthController {
  private userRepository = getConnection("hr-management").getRepository(User);

  async login(req: Request, res: Response) {
    /* //Check if username and password are set
    let { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send();
    }

    //Get user from database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({ where: { username } });
    } catch (error) {
      res.status(401).send();
    }

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send();
      return;
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    res.send(token);*/
  }

  async register(req: Request, res: Response) {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.userRepository.save({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    return user;
  }
}
