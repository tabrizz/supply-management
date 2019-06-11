import { Router } from "express";

import auth from "./routes/Auth";
import asset from "./routes/Asset";
import user from "./routes/User";

export const routes = Router();

routes.use("/", auth);
routes.use("/", user);
routes.use("/logistics", asset);

export default routes;
