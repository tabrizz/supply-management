import { Router } from "express";
import { AuthController } from "../controller/auth/AuthController";
import { isAuth } from "../middleware/isAuth";

const router = Router();
//Login route
router.post("/login", AuthController.login);

//Change my password
//router.post("/change-password", [isAuth], AuthController.changePassword);

export default router;
