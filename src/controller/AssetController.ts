import { getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Asset } from "../entity/supply-management/Asset";

export class AssetController {
  static async all(request: Request, res: Response) {
    const assetRepository = getConnection("supply-management").getRepository(
      Asset
    );
    return res.status(201).send(await assetRepository.find());
  }

  static async one(req: Request, res: Response, next: NextFunction) {
    const assetRepository = getConnection("supply-management").getRepository(
      Asset
    );
    return res.status(201).send(await assetRepository.findOne(req.params.id));
  }

  static async save(req: Request, res: Response, next: NextFunction) {
    const assetRepository = getConnection("supply-management").getRepository(
      Asset
    );
    return res.status(201).send(await assetRepository.save(req.body));
  }

  static async remove(req: Request, res: Response, next: NextFunction) {
    const assetRepository = getConnection("supply-management").getRepository(
      Asset
    );
    let assetToRemove = await assetRepository.findOneOrFail(req.params.id);
    await assetRepository.remove(assetToRemove);

    return res.status(201).send({ data: { message: "Activo removido" } });
  }
}
