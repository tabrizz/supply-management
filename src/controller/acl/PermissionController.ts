import { getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Permission } from "../../entity/hr-management/Permission";

export class PermissionController {
  static async all(_: Request, res: Response) {
    const permissionRepository = getConnection("hr-management").getRepository(
      Permission
    );
    return res.status(201).send(await permissionRepository.find());
  }

  static async one(req: Request, res: Response, _: NextFunction) {
    const permissionRepository = getConnection("hr-management").getRepository(
      Permission
    );
    return res
      .status(201)
      .send(await permissionRepository.findOne(req.params.id));
  }

  static async save(req: Request, res: Response, _: NextFunction) {
    const permissionRepository = getConnection("hr-management").getRepository(
      Permission
    );
    return res.status(201).send(await permissionRepository.save(req.body));
  }

  static async remove(req: Request, res: Response, _: NextFunction) {
    const permissionRepository = getConnection("hr-management").getRepository(
      Permission
    );
    let permissionToRemove = await permissionRepository.findOneOrFail(
      req.params.id
    );
    await permissionRepository.remove(permissionToRemove);

    return res.status(201).send({ data: { message: "Permiso removido" } });
  }
}
