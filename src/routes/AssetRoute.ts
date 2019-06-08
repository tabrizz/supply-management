import { AssetController } from "../controller/AssetController";

export const AssetRoute = [
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
