import { getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Requirement } from "../entity/supply-management/Requirement";

export class RequirementController {
  static async all(request: Request, res: Response) {
    const requirementRepository = getConnection(
      "supply-management"
    ).getRepository(Requirement);
    return res
      .status(201)
      .send({ data: { requirements: await requirementRepository.find() } });
  }

  static async one(req: Request, res: Response, next: NextFunction) {
    const requirementRepository = getConnection(
      "supply-management"
    ).getRepository(Requirement);
    return res
      .status(201)
      .send({
        data: {
          requirements: await requirementRepository.findOne(req.params.id)
        }
      });
  }

  static async save(req: Request, res: Response, next: NextFunction) {
    const requirementRepository = getConnection(
      "supply-management"
    ).getRepository(Requirement);
    return res
      .status(201)
      .send({
        data: { requirements: await requirementRepository.save(req.body) }
      });
  }

  static async remove(req: Request, res: Response, next: NextFunction) {
    const requirementRepository = getConnection(
      "supply-management"
    ).getRepository(Requirement);
    let requirementToRemove = await requirementRepository.findOneOrFail(
      req.params.id
    );
    await requirementRepository.remove(requirementToRemove);

    return res.status(201).send({ data: { message: "Activo removido" } });
  }
}
