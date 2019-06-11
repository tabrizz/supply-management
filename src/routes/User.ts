import { Router } from "express";
import { UserController } from "../controller/UserController";
import { isAuth } from "../middleware/isAuth";

const router = Router();

//All users route
router.get("/users", [isAuth], UserController.all);

//User by id route
router.get("/users/:id", [isAuth], UserController.one);

//Save user route
router.post("/users", [isAuth], UserController.save);

//Delete user by id route
router.delete("/users/:id", [isAuth], UserController.remove);

export default router;
