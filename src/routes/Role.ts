import { Router } from "express";
import { RoleController } from "../controller/acl/RoleController";
import { isAuth } from "../middleware/isAuth";

const router = Router();

//All roles route
router.get("/roles", [isAuth], RoleController.all);

//Role by id route
router.get("/roles/:id", [isAuth], RoleController.one);

//Save role route
router.post("/roles", [isAuth], RoleController.save);

//Delete role by id route
router.delete("/roles/:id", [isAuth], RoleController.remove);

export default router;
