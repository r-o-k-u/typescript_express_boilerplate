/**
 * Define the error & exception handlers
 *
 */

import Log from "./Log";
import Locals from "../providers/Locals";
import express, { NextFunction, Request, Response } from "express";
class Handler {
  /**
   * Handles all the not found routes
   */
  public static notFoundHandler(_express: express.Application): any {
    const apiPrefix = Locals.config().apiPrefix;

    _express.use("*", (req: Request, res: Response) => {
      const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

      Log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
      if (req.xhr || req.originalUrl.includes(`/${apiPrefix}/`)) {
        return res.json({
          error: "Page Not Found",
        });
      } else {
        res.status(404);
        return res.render("pages/error", {
          title: "Page Not Found",
          error: [],
        });
      }
    });

    return _express;
  }

  /**
   * Handles your api/web routes errors/exception
   */
  public static clientErrorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ): any {
    Log.error(err.stack);

    if (req.xhr) {
      return res.status(500).send({ error: "Something went wrong!" });
    } else {
      return next(err);
    }
  }

  /**
   * Show undermaintenance page incase of errors
   */
  public static errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ): any {
    Log.error(err.stack);
    res.status(500);

    const apiPrefix = Locals.config().apiPrefix;
    if (req.originalUrl.includes(`/${apiPrefix}/`)) {
      if (err.name && err.name === "UnauthorizedError") {
        const innerMessage =
          err.inner && err.inner.message ? err.inner.message : undefined;
        return res.json({
          error: ["Invalid Token!", innerMessage],
        });
      }

      return res.json({
        error: err,
      });
    }

    return res.render("pages/error", {
      error: err.stack,
      title: "Under Maintenance",
    });
  }

  /**
   * Register your error / exception monitoring
   * tools right here ie. before "next(err)"!
   */
  public static logErrors(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ): any {
    Log.error(err.stack);

    return next(err);
  }
}

export default Handler;