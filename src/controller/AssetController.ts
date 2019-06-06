import { getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Asset } from "../entity/supply-management/Asset";

export class AssetController {
  private assetRepository = getConnection("supply-management").getRepository(
    Asset
  );

  async all(request: Request, response: Response, next: NextFunction) {
    return this.assetRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.assetRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.assetRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let assetToRemove = await this.assetRepository.findOneOrFail(
      request.params.id
    );
    await this.assetRepository.remove(assetToRemove);
  }
}
