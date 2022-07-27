const dotenv = require("dotenv");

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
console.log("env ", process.env.NODE_ENV);

const { PORT } = process.env;

const port = PORT || 3232;
const prefix: String = "/api/v1";

export default {
  port,
  prefix,
};
