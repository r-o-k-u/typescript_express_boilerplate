/**
 * Define the error & exception handlers
 *
 */

import Log from "./Log";
import Locals from "../providers/Locals";
import pkg from "jsonwebtoken";
const { sign } = pkg;
class Jwt {
  public static signRefreshToken(userId: number) {
    const refreshToken = sign(
      { id: userId },
      Locals.config().refreshTokenSecretKey || "sscsscscsdcsdcscsscsc",
      {
        expiresIn: Locals.config().jwt_refresh_expiration_days || "7d",
      }
    );
    return refreshToken;
  }
  public static signConfirmCodeToken(userId: number, confirmCode: String) {
    const confirmCodeToken = sign(
      { id: userId, code: confirmCode },
      Locals.config().jwtSecretKey || "cscscscscdgefhboiveivnme0v9envev",
      {
        expiresIn: Locals.config().jwt_verify_email_expiration_minutes || "5m",
      }
    );
    return confirmCodeToken;
  }
}

export default Jwt;