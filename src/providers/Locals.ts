/**
 * Define App Locals & Configs
 *
 */

import { Application } from "express";
import * as path from "path";
import * as dotenv from "dotenv";

class Locals {
  /**
   * Makes env configs available for your app
   * throughout the app's runtime
   */
  public static config(): any {
    dotenv.config({ path: path.join(__dirname, "../../.env") });
    const {
      COMPANY_NAME,
      PORT,
      APP_NAME,
      APP_URL,
      APP_SECRET,
      REFRESH_TOKEN_SECRET_KEY,
      DB_USER,
      DB_PASSWORD,
      DB_DRIVER,
      DB_HOST,
      DB_PORT,
      DB_NAME,
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USERNAME,
      SMTP_PASSWORD,
      EMAIL_FROM,
      JWT_EXPIRES_IN,
      JWT_REFRESH_EXPIRATION_DAYS,
      JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
      JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
      SMS_API_KEY,
      SMS_CLIENT_ID,
      SMS_SENDER_ID,
      SMS_ACCESS_KEY,
      CORS_ENABLED,
      API_PREFIX,
      LOG_DAYS,
    } = process.env;
    const url = APP_URL || `http://localhost:${process.env.PORT}`;
    const port = PORT || 4040;
    const appSecret = APP_SECRET || "This is your responsibility!";
    const dbName = DB_NAME;
    const dbUser = DB_USER;
    const dbHost = DB_HOST;
    const dbDriver = DB_DRIVER;
    const dbPassword = DB_PASSWORD;
    const dbPort = DB_PORT;
    const name = APP_NAME || "Express TS Boilerplate";
    const year = new Date().getFullYear();
    const copyright = `Copyright ${year} ${name} | All Rights Reserved`;
    const company = COMPANY_NAME || "Qwerty Systems";

    const isCORSEnabled = CORS_ENABLED || true;
    const jwtExpiresIn = JWT_EXPIRES_IN || 3;
    const apiPrefix = API_PREFIX || "api";

    const logDays = LOG_DAYS || 10;

    return {
      appSecret,
      apiPrefix,
      company,
      copyright,
      isCORSEnabled,
      jwtExpiresIn,
      logDays,
      dbName,
      dbUser,
      dbHost,
      dbDriver,
      dbPassword,
      dbPort,
      name,
      port,
      url,
      smtp_host: SMTP_HOST,
      smtp_port: SMTP_PORT,
      smtp_username: SMTP_USERNAME,
      smtp_password: SMTP_PASSWORD,
      email_from: EMAIL_FROM,
      jwt_refresh_expiration_days: JWT_REFRESH_EXPIRATION_DAYS,
      jwt_reset_password_expiration_minutes:
        JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
      jwt_verify_email_expiration_minutes: JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
      sms_api_key: SMS_API_KEY,
      sms_client_id: SMS_CLIENT_ID,
      sms_sender_id: SMS_SENDER_ID,
      sms_access_key: SMS_ACCESS_KEY,
    };
  }

  /**
   * Injects your config to the app's locals
   */
  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;
