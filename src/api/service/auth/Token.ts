import { User } from "../../../database/entity/User";
import { Token } from "../../../database/entity/Tokens";
import db from "../../../database/index";
import bcrypt from "bcrypt";

class Tokens {
  /**
   * Get all users
   * @returns
   */
  async get(): Promise<Error | null> {
    // Get users from database
    try {
      return null;
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
  async hash(password: String): Promise<Error | null> {
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async generateJwtToken(account: String): Promise<Error | null> {
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async generateRefreshToken(
    account: String,
    ipAddress: String
  ): Promise<Error | null> {
    try {
      return null;
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
