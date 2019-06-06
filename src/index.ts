import "reflect-metadata";
import { createConnections } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import { Request, Response } from "express";
import { Routes } from "./routes";

const main = async () => {
  await createConnections();

  // create express app
  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());

  // register express routes from defined application routes
  Routes.forEach(route => {
    (app as any)[route.method](
      route.route,
      (req: Request, res: Response, next: Function) => {
        const result = new (route.controller as any)()[route.action](
          req,
          res,
          next
        );
        if (result instanceof Promise) {
          result.then(result =>
            result !== null && result !== undefined
              ? res.send(result)
              : undefined
          );
        } else if (result !== null && result !== undefined) {
          res.json(result);
        }
      }
    );
  });

  // setup express app here
  // ...

  // start express server
  app.listen(3000);

  console.log(
    "Express server has started on port 3000. Open http://localhost:3000/users to see results"
  );
};

main();
