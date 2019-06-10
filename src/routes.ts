import { Router } from "express";

import auth from "./routes/Auth";
// import { User } from "./routes/User";
//import { AssetRoute } from "./routes/Asset";

export const routes = Router();

routes.use("/auth", auth);

export default routes;
