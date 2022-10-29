/**
 * Define the error & exception handlers
 *
 */

import Log from "./Log";
import Locals from "../providers/Locals";
const { createTransport } = require("nodemailer");

const SMTP_HOST = Locals.config().smtp_host as string;
const SMTP_USERNAME = Locals.config().smtp_username as string;
const SMTP_PASSWORD = Locals.config().smtp_password;

class Mailer {
  static sendEmail(email: any, subject: string, html: string) {
    new Promise(async (resolve, reject) => {
      if (!email || !subject || !html) {
        // console.log("email, subject, body, lang", email, subject, body, lang)
        return new Error("Please provide all values");
      }
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
      } catch (err) {
        console.log("err", err);
        return reject(err);
      }
    });
  }
  public static async sendVerificationEmail(account: any, origin: any) {
    origin == null ? origin == "test.com" : "";
    let message;
    if (origin) {
      const verifyUrl = `${origin}/account/verify-email?token=${account.verificationToken}`;
      message = `<p>Please click the below link to verify your email address:</p>
                   <p><a href="${verifyUrl}">${verifyUrl}</a></p>`;
    } else {
      message = `<p>Please use the below token to verify your email address with the <code>/account/verify-email</code> api route:</p>
                   <p><code>${account.verificationToken}</code></p>`;
    }

    await this.sendEmail(
      account.email,
      "Sign-up Verification API - Verify Email",
      `<h4>Verify Email</h4>
               <p>Thanks for registering!</p>
               ${message}`
    );
  }

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
