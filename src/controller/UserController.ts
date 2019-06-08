import { getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/hr-management/User";

export class UserController {
  private userRepository = getConnection("hr-management").getRepository(User);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.findOneOrFail(
      request.params.id
    );
    await this.userRepository.remove(userToRemove);
  }
}
