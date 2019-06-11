import { Router } from "express";
import { AssetController } from "../controller/AssetController";
import { isAuth } from "../middleware/isAuth";

const router = Router();

//All assets route
router.get("/assets", [isAuth], AssetController.all);

//Asset by id route
router.get("/assets/:id", [isAuth], AssetController.one);

//Save asset route
router.post("/assets", [isAuth], AssetController.save);

//Delete asset by id route
router.delete("/assets/:id", [isAuth], AssetController.remove);

export default router;
