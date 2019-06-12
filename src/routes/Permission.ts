import { Router } from "express";
import { PermissionController } from "../controller/acl/PermissionController";
import { isAuth } from "../middleware/isAuth";

const router = Router();

//All permissions route
router.get("/permissions", [isAuth], PermissionController.all);

//Permission by id route
router.get("/permissions/:id", [isAuth], PermissionController.one);

//Save permission route
router.post("/permissions", [isAuth], PermissionController.save);

//Delete permission by id route
router.delete("/permissions/:id", [isAuth], PermissionController.remove);

export default router;
