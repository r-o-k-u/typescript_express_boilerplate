/**
 * Define App Locals & Configs
 *
 */

import e, { Application } from "express";
import * as path from "path";
import * as dotenv from "dotenv";

class Locals {
  /**
   * Makes env configs available for your app
   * throughout the app's runtime
   */
  public static config(): any {
    if (!process.env.NODE_ENV || process.env.NODE_ENV == "production") {
      dotenv.config({ path: `.env` });
    } else {
      dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
    }

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
      JWT_SECRET_KEY,
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
      JWT_EXPIRATION,
      ENABLE_EMAIL_VERIFICATION,
      ENABLE_PHONE_VERIFICATION,
    } = process.env;
    const year = new Date().getFullYear();

    return {
      PORT: PORT || 4040,
      APP_URL:
        process.env.NODE_ENV == "production"
          ? APP_URL
          : `http://localhost:${process.env.PORT}`,
      APP_NAME: APP_NAME || "Express TS Boilerplate",
      APP_SECRET: APP_SECRET || "This is your responsibility!",
      COMPANY_NAME: COMPANY_NAME || "Qwerty Systems",
      COPYRIGHT: `Copyright ${year} ${APP_NAME} | All Rights Reserved`,
      YEAR: year,
      API_PREFIX: API_PREFIX || "api",
      CORS_ENABLED: CORS_ENABLED || true,
      JWT_EXPIRES_IN: JWT_EXPIRES_IN || 3,
      LOG_DAYS: LOG_DAYS || 10,
      DB_NAME,
      DB_USER,
      DB_HOST,
      DB_DRIVER,
      DB_PASSWORD,
      DB_PORT,
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USERNAME,
      SMTP_PASSWORD,
      EMAIL_FROM,
      JWT_REFRESH_EXPIRATION_DAYS,
      JWT_EXPIRATION,
      JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
      JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
      SMS_API_KEY,
      SMS_CLIENT_ID,
      SMS_SENDER_ID,
      SMS_ACCESS_KEY,
      REFRESH_TOKEN_SECRET_KEY,
      JWT_SECRET_KEY,
      ENABLE_EMAIL_VERIFICATION: ENABLE_EMAIL_VERIFICATION,
      ENABLE_PHONE_VERIFICATION: ENABLE_PHONE_VERIFICATION,
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
