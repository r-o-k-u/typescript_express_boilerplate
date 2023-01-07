import { Express, Request, Response } from "express";
import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import config from "../../config/swagger.config";
import path from "path";
const specDoc = swaggerJsdoc(config);

const options = {
  customCss: `
  .topbar-wrapper img {content:url("/public/favicon.ico"); width:50px; height:auto;}
  .swagger-ui .topbar { background-color: #000000; color:FFFF}`,
  customSiteTitle: "Qwerty Systems",
  customfavIcon: "/public/favicon.ico",
  explorer: true,
};

export default {
  specs: "/docs/api",
  serve,
  specDoc,
  setup,
  options,
};
