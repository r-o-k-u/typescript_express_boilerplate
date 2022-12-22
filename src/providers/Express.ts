/**
 *Express Server
 *
 */

import express from "express";

import Locals from "./Locals";
import Routes_ from "../routes";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import ExceptionHandler from "../utils/Handler";
import Logger from "../utils/Log";
import expressLayouts from "express-ejs-layouts";
const Log = new Logger();
const Routes = new Routes_();

class Express {
  /**
   * Create the express object
   */
  public express: express.Application;

  /**
   * Initializes the express server
   */
  constructor() {
    this.express = express();

    this.mountDotEnv();
    this.mountPrerequisites();
    this.mountRoutes();
  }

  private mountDotEnv(): void {
    this.express = Locals.init(this.express);
  }

  /**
   * Mounts all the defined routes
   */
  private mountPrerequisites(): void {
    /**
     * Get NODE_ENV from environment and store in Express.
     */
    this.express.set("env", process.env.NODE_ENV);
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.get("/layouts/", function (req, res) {
      res.render("view");
    });
    this.express.use(express.static(path.join(__dirname, "public")));
    this.express.use("/public", express.static("public"));
    this.express.use("/docs", express.static("public/docs"));
    this.express.set("views", path.join(__dirname, "../views"));
    this.express.set("view engine", "ejs");

    this.express.use(expressLayouts);
  }

  /**
   * Mounts all the defined routes
   */
  private mountRoutes(): void {
    this.express = Routes.mountDocs(this.express);
    this.express = Routes.mountApi(this.express);
    this.express = Routes.mountWeb(this.express);
  }

  /**
   * Starts the express server
   */
  public init(): any {
    Log.info("Booting the 'HTTP' middleware...");

    // Extra headers for security
    this.express.use(helmet());

    //cors
    this.express.use(
      cors({
        origin: "*",
        credentials: true,
        optionsSuccessStatus: 200,
      })
    );
    // cookie parser
    this.express.use(cookieParser());

    // Disable the x-powered-by header in response
    this.express.disable("x-powered-by");
    this.express.disable("etag");

    // Registering Exception / Error Handlers
    this.express.use(ExceptionHandler.logErrors);
    this.express.use(ExceptionHandler.clientErrorHandler);
    this.express.use(ExceptionHandler.errorHandler);
    this.express = ExceptionHandler.notFoundHandler(this.express);
  }
}

/** Export the express module */
export default Express;
