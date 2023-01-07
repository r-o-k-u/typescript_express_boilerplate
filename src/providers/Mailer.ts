/**
 * Define the error & exception handlers
 *
 */

import Locals from "../providers/Locals";
import { response } from "express";
import { Console } from "console";
import Handler from "./Handler";
import Logger from "./Log";
let Log = new Logger();
const { createTransport } = require("nodemailer");

const SMTP_HOST = Locals.config().SMTP_HOST as string;
const SMTP_USERNAME = Locals.config().SMTP_USERNAME as string;
const SMTP_PASSWORD = Locals.config().SMTP_PASSWORD;

/**
 * Mailer Class
 */
class Mailer {
  /**
   *
   * @param email
   * @param subject
   * @param html
   */
  static sendEmail(email: any, subject: string, html: string) {
    new Promise(async (resolve, reject) => {
      if (!email || !subject || !html) {
        // console.log("email, subject, body, lang", email, subject, body, lang)
        return new Error("Please provide all values");
      }
      console.log(SMTP_HOST, SMTP_USERNAME, SMTP_PASSWORD);
      const emailTransfer = createTransport({
        host: SMTP_HOST,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: SMTP_USERNAME, // generated ethereal user
          pass: SMTP_PASSWORD, // generated ethereal password
        },
      });

      const emailInfo = {
        from: SMTP_USERNAME,
        to: email,
        subject: subject,
        html: html,
      };

      try {
        await emailTransfer.sendMail(emailInfo);
        return resolve("Success");
      } catch (err: any) {
        console.log("err", err);
        Log.error(err.message);

        return reject(err);
      }
    });
  }
  /**
   *
   * @param account
   * @param origin
   */
  public static async sendVerificationEmail(
    account: { verificationToken: string; email: string },
    origin: any
  ) {
    origin == null ? origin == Locals.config().APP_URL : "";
    let message;
    if (origin) {
      const verifyUrl = `${origin}/account/verify-email?token=${account.verificationToken}`;
      message = `<p>Please click the below link to verify your email address:</p>
                   <p><a href="${verifyUrl}">${verifyUrl}</a></p>`;
    } else {
      message = `<p>Please use the below token to verify your email address with the <code>/account/verify-email</code> api route:</p>
                   <p><code>${account.verificationToken}</code></p>`;
    }

    const response = await this.sendEmail(
      account.email,
      "Sign-up Verification API - Verify Email",
      `<h4>Verify Email</h4>
               <p>Thanks for registering!</p>
               ${message}`
    );
    return response;
  }

  /**
   *
   * @param account
   * @param origin
   */
  public static async sendAlreadyRegisteredEmail(account: any, origin: any) {
    let message;
    origin == null ? origin == "test.com" : "";
    if (origin) {
      message = `<p>If you don't know your password please visit the <a href="${origin}/account/forgot-password">forgot password</a> page.</p>`;
    } else {
      message = `<p>If you don't know your password you can reset it via the <code>/account/forgot-password</code> api route.</p>`;
    }

    await this.sendEmail(
      account.email,
      "Sign-up Verification API - Email Already Registered",
      `<h4>Email Already Registered</h4>
               <p>Your email <strong>${account.email}</strong> is already registered.</p>
               ${message}`
    );
  }
  /**
   *
   * @param account
   * @param origin
   */
  public static async sendPasswordResetEmail(account: any, origin: any) {
    origin == null ? origin == "test.com" : "";
    let message;
    if (origin) {
      const resetUrl = `${origin}/account/reset-password?token=${account.resetToken}`;
      message = `<p>Please click the below link to reset your password, the link will be valid for 1 day:</p>
                   <p><a href="${resetUrl}">${resetUrl}</a></p>`;
    } else {
      message = `<p>Please use the below token to reset your password with the <code>/account/reset-password</code> api route:</p>
                   <p><code>${account.resetToken}</code></p>`;
    }

    this.sendEmail(
      account.email,
      "Sign-up Verification API - Reset Password",
      `<h4>Reset Password Email</h4>
               ${message}`
    );
  }
}

export default Mailer;
