/**
 * Define all your routes
 *
 */

import { Application } from "express";
import Locals from "../providers/Locals";
import Log from "../utils/Log";

import apiRouter from "./api";
import webRouter from "./web";
import docsRouter from "./docs";

class Routes {
  public mountDocs(_express: Application): Application {
    Log.info("Routes :: Mounting doc Routes...");
    return _express.use(docsRouter);
  }
  public mountWeb(_express: Application): Application {
    Log.info("Routes :: Mounting Web Routes...");

    return _express.use("/", webRouter);
  }

  public mountApi(_express: Application): Application {
    const apiPrefix = Locals.config().apiPrefix;
    Log.info("Routes :: Mounting API Routes...");

    return _express.use(`/${apiPrefix}`, apiRouter);
  }
}

export default new Routes();
