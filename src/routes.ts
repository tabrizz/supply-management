import { Router } from "express";

import auth from "./routes/Auth";
import asset from "./routes/Asset";
import user from "./routes/User";
import role from "./routes/Role";
import permission from "./routes/Permission";

export const routes = Router();

routes.use("/", auth);
routes.use("/", user);
routes.use("/acl", role);
routes.use("/acl", permission);
routes.use("/logistics", asset);

export default routes;
