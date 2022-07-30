import { Express, Request, Response } from "express";
import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import config from "../../config/swagger.config";
const specDoc = swaggerJsdoc(config);

export default {
  specs: "/docs",
  serve,
  specDoc,
  setup,
};
