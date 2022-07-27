import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
const app = express();

import router from "./api/routes/index";

import config from "../config/index";

app.use(helmet());
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

/**
 * Get NODE_ENV from environment and store in Express.
 */
app.set("env", process.env.NODE_ENV);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.disable("x-powered-by");
app.disable("etag");

app.set("views", path.join(__dirname, "../src/views"));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Content-Security-Policy-Report-Only", "default-src: https:");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT POST PATCH DELETE GET");
    return res.status(200).json({});
  }
  next();
});

app.use(router);

app.use((_req: Request, _res: Response, next: NextFunction) => {
  const error: any = new Error("Endpoint not found!");
  error.status = 404;
  next(error);
});

export default app;
