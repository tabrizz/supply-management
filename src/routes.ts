import { UserController } from "./controller/UserController";
import { AssetController } from "./controller/AssetController";

export const Routes = [
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
    method: "get",
    route: "/assets",
    controller: AssetController,
    action: "all"
  },
  {
    method: "get",
    route: "/assets/:id",
    controller: AssetController,
    action: "one"
  },
  {
    method: "post",
    route: "/assets",
    controller: AssetController,
    action: "save"
  },
  {
    method: "delete",
    route: "/assets/:id",
    controller: AssetController,
    action: "remove"
  }
];
