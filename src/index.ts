import "reflect-metadata";
import { createConnections } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import { Request, Response } from "express";
import routes from "./routes";
import { redis } from "./redis";
import session from "express-session";
import connectRedis from "connect-redis";

const main = async () => {
  await createConnections();

  // create express app
  const app = express();
  const RedisStore = connectRedis(session);

  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());

  // setup express app here
  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      name: "qid",
      secret: "aslkdfjoiq12312",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
      }
    })
  );

  // register express routes from defined application routes
  app.use(routes);

  // start express server
  app.listen(3000);

  console.log(
    "Express server has started on port 3000. Open http://localhost:3000/ to see results"
  );
};

main();
