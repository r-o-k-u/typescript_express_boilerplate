/**
 * Define the error & exception handlers
 *
 */

import Log from "./Log";
import Locals from "../providers/Locals";
const { createTransport } = require("nodemailer");

const sms_api_key = Locals.config().sms_api_key as string;
const sms_client_id = Locals.config().sms_client_id as string;
const sms_sender_id = Locals.config().sms_sender_id;
const sms_access_key = Locals.config().sms_access_key;

/**
 * SMS class
 */
class SMS {
  /**
   *
   * @param phone
   * @param message
   * @returns
   */
  public static SendSms(phone: number, message: String) {
    return null;
  }
}

export default SMS;
