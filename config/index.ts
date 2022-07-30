const dotenv = require("dotenv");
import * as swaggerConfig from "./swagger.config";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const {
  PORT,
  JWT_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USERNAME,
  SMTP_PASSWORD,
  EMAIL_FROM,
  JWT_ACCESS_EXPIRATION_MINUTES,
  JWT_REFRESH_EXPIRATION_DAYS,
  JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
  JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  SMS_API_KEY,
  SMS_CLIENT_ID,
  SMS_SENDER_ID,
  SMS_ACCESS_KEY,
} = process.env;

const port: any = PORT || 3232;
const specs: String = "/docs";
const prefix: String = "/api/v1";

export default {
  port,
  prefix,
  swaggerConfig,
  specs,
};
