import { UserController } from "../controller/UserController";
import { AuthController } from "../controller/auth/AuthController";

export const UserRoute = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
  },
  {
    method: "post",
    route: "/register",
    controller: AuthController,
    action: "register"
  }
];
