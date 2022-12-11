/**
 * Define the error & exception handlers
 *
 */

import Logger from "../utils/Log";
const Log = new Logger();
import Locals from "../providers/Locals";
import express, { NextFunction, Request, Response } from "express";
/**
 * Error Handler class
 */
class Handler {
  /**
   *
   * Handles all the not found routes
   * @param _express
   * @returns
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
        return res.render("error", {
          title: "Page Not Found",
          message: "Page Not Found",
          error: {
            status: 404,
            stack: "",
          },
        });
      }
    });

    return _express;
  }

  /**
   *
   * Handles your api/web routes errors/exception
   * @param err
   * @param req
   * @param res
   * @param next
   * @returns
   */
  public static clientErrorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ): any {
    Log.error(err.stack);

    if (req.xhr) {
      return res.json({
        Message: "Something went wrong!",
        Code: err.status || 500,
      });
    } else {
      return next(err);
    }
  }

  /**
   *
   *
   * Show under maintenance page incase of errors
   * @param err
   * @param req
   * @param res
   * @param next
   * @returns
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
          Message: ["Invalid Token!", innerMessage],
          Code: err.status || 401,
        });
      }
      return res.json({
        Message: err.message,
        Code: err.status || 500,
      });
    }

    return res.render("pages/error", {
      error: err.stack,
      title: "Under Maintenance",
    });
  }

  /**
   *
   * * Register your error / exception monitoring
   * tools right here ie. before "next(err)"!
   * @param err
   * @param req
   * @param res
   * @param next
   * @returns
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
