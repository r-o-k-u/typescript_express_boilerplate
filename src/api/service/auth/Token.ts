import { User } from "../../../database/entity/User";
import { Token } from "../../../database/entity/Tokens";
import db from "../../../database/index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Locals from "../../../providers/Locals";
class Tokens {
  static async saveToken(
    otp_hash: string,
    expiry: Date,
    user: any,
    type: string
  ) {
    try {
      const token = new Token();
      (token.token = otp_hash),
        (token.expires = expiry),
        (token.user = user),
        (token.type = type);
      token.is_active = true;
      token.is_expired = false;
      const rawData = await db.database.manager.save(token);
      return rawData;
    } catch (err: any) {
      throw new Error(err.message || "");
    }
  }
  /**
   * Get
   * @returns
   */
  async get(): Promise<Error | null> {
    // Get users from database
    try {
      const token = new Token();
      const rawData = await db.database.manager.find();
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  /**
   * Get
   * @returns
   */
  static async find(token: String): Promise<Error | null | any> {
    // Get users from database
    try {
      const tokenData = await db.database.manager
        .getRepository(Token)
        .createQueryBuilder("Token")
        .where("Token.token = :token", {
          token: token,
        })
        .getOne();
      return tokenData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getRefreshToken(): Promise<Error | null> {
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async saveToken(
    token: String,
    expires: Date,
    user: Number,
    type: String,
    is_active: Boolean
  ): Promise<Error | null> {
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async hash(password: String): Promise<Error | null> {
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  static async generateJwtToken(account: any): Promise<Error | null | any> {
    try {
      const token = jwt.sign(
        { sub: account.id, id: account.id },
        Locals.config().jwtSecretKey,
        {
          expiresIn: Locals.config().jwt_expiration,
        }
      );
      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  static async generateRefreshToken(account: any): Promise<Error | null | any> {
    try {
      const token = jwt.sign(
        { sub: account.id, id: account.id },
        Locals.config().jwtSecretKey,
        {
          expiresIn: Locals.config().jwt_refresh_expiration_days,
        }
      );
      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async refreshToken(token: String, ipAddress: String): Promise<Error | null> {
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async revokeToken(token: String, ipAddress: String): Promise<Error | null> {
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async updateToken(condition: String, payload: String): Promise<Error | null> {
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default Tokens;
