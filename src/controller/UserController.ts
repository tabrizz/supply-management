import { getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/hr-management/User";

export class UserController {
  static async all(req: Request, res: Response, next: NextFunction) {
    const userRepository = getConnection("hr-management").getRepository(User);
    return res.status(201).send(await userRepository.find());
  }

  static async one(req: Request, res: Response, next: NextFunction) {
    const userRepository = getConnection("hr-management").getRepository(User);
    return res.status(201).send(await userRepository.findOne(req.params.id));
  }

  static async save(req: Request, res: Response, next: NextFunction) {
    const userRepository = getConnection("hr-management").getRepository(User);
    return res.status(201).send(await userRepository.save(req.body));
  }

  static async remove(req: Request, res: Response, next: NextFunction) {
    const userRepository = getConnection("hr-management").getRepository(User);
    let userToRemove = await userRepository.findOneOrFail(req.params.id);
    await userRepository.remove(userToRemove);
    return res.status(201).send("Usuario removido");
  }
}
