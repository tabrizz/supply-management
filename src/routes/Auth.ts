import { Router, Request, Response, response } from "express";
import { AuthController } from "../controller/auth/AuthController";
import { isAuth } from "../middleware/isAuth";

const router = Router();

//Login route
router.post("/login", AuthController.login);

//Create user route
router.post("/register", AuthController.register);

router.get("/me", [isAuth], (req: Request, res: Response) => {
  res.send("Me");
});

//Change my password
//router.post("/change-password", [isAuth], AuthController.changePassword);

export default router;
