import { Express, Request, Response } from "express";
import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import config from "../../config/index";
const specDoc = swaggerJsdoc(config.swaggerConfig.default);

export default {
  specs: config.specs.toString(),
  serve,
  specDoc,
  setup,
};
