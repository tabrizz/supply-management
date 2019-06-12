import { getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Role } from "../../entity/hr-management/Role";

export class RoleController {
  static async all(request: Request, res: Response) {
    const roleRepository = getConnection("hr-management").getRepository(Role);
    return res.status(201).send(await roleRepository.find());
  }

  static async one(req: Request, res: Response, next: NextFunction) {
    const roleRepository = getConnection("hr-management").getRepository(Role);
    return res.status(201).send(await roleRepository.findOne(req.params.id));
  }

  static async save(req: Request, res: Response, _: NextFunction) {
    const roleRepository = getConnection("hr-management").getRepository(Role);
    const { name, description, permissionIds } = req.body;
    const role = await roleRepository.save({ name, description });

    permissionIds.map(async (id: number) => {
      await roleRepository
        .createQueryBuilder()
        .insert()
        .into("role_permissions_permission")
        .values([{ roleId: role.id, permissionId: id }])
        .execute();
    });

    return res.status(201).send({ data: { message: "Rol creado" } });
  }

  static async remove(req: Request, res: Response, _: NextFunction) {
    const roleRepository = getConnection("hr-management").getRepository(Role);
    let roleToRemove = await roleRepository.findOneOrFail(req.params.id);
    await roleRepository.remove(roleToRemove);

    return res.status(201).send({ data: { message: "Rol removido" } });
  }

  static async addPermissions(req: Request, res: Response) {
    const { permissionIds } = req.body;
  }
}
