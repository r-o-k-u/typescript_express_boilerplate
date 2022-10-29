import { Request, Response, NextFunction } from "express";
import UserService from "../../service/user/user";
import TokenService from "../../service/auth/Token";

import Mailer from "../../../utils/Mailer";

import Sms from "../../../utils/Sms";
import bcrypt from "bcrypt";
import Locals from "../../../providers/Locals";
import { addMinutes } from "date-fns";

const userService = new UserService();

export interface IUser {
  first_name: string;
  middle_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  id_number: string;
  phone_number: string;
  address1: string;
  address2: string;
  gender: string;
  password: string;
  id_pic_front: string;
  id_pic_back: string;
  passport_pic: string;
}
class AuthController {
  public static register = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const payload = req.body;
      userService
        .add(payload)
        .then((data: any) => {
          if (data) {
            let email = data.email;
            let phone = data.phone_number;
            //channels 1.phone 2.web
            let otp = data.otp;
            let otp_hash = data.otp_hash;
            if (payload.channel == "1" && phone) {
              this.sendVerificationCode(undefined, phone, undefined, otp);
            }
            if (payload.channel == "2" && email) {
              this.sendVerificationCode(email, undefined, otp_hash, undefined);
            }
            //delete data.otp;
            //delete data.otp_hash;
            res.status(200).json({
              message: "user added successfully ",
              data: data,
            });
          } else {
            res.status(200).json({
              message: "User(s) not created",
            });
          }
        })
        .catch((error: Error) => {
          next(new Error(error.message));
        });
    } catch (error: any) {
      return res.status(404).json({
        error: error.message,
      });
    }
  };
  public static login = async (req: Request, res: Response) => {
    try {
      let payload = req.body;
      let checkVerified = await userService.find(
        req.body.email,
        req.body.phone_number
      );

      if (!checkVerified.user.verified) {
        return res.status(200).json({
          message: "Please verify your account to continue",
        });
      } else {
        const isMatch = bcrypt.compareSync(
          req.body.password,
          checkVerified.password
        );
        if (!isMatch) {
          //throw "Email or password is incorrect";
          throw new Error("Incorrect email or password");
        } else {
          const token = await TokenService.generateJwtToken(checkVerified.user);
          const r_token = await TokenService.generateRefreshToken(
            checkVerified.user
          );
          const expiry_token = addMinutes(
            new Date(),
            parseInt(Locals.config().jwt_expiration)
          );
          const expiry_referesh = addMinutes(
            new Date(),
            parseInt(Locals.config().jwt_refresh_expiration_days)
          );
          const jwt_token = await TokenService.saveToken(
            token,
            expiry_token,
            checkVerified.user.id,
            "jwt"
          );
          const refresh_token = await TokenService.saveToken(
            r_token,
            expiry_referesh,
            checkVerified.user.id,
            "verification"
          );
          return res.status(200).json({
            message: "Login successful",
            jwt_token: jwt_token.token,
            refresh_token: refresh_token.token,
          });
        }
      }
    } catch (error: any) {
      return res.status(404).json({
        error: error.message,
      });
    }
  };
  public static logout = (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "got to logout",
      });
    } catch (error: any) {
      return res.status(404).json({
        error: error.message,
      });
    }
  };
  public static verifyAccount = async (req: Request, res: Response) => {
    try {
      let payload = req.body;
      let token = await TokenService.find(payload.token);
      if (token) {
        if (token.expires >= new Date()) {
          return res.status(200).json({
            message: "Token is expired",
          });
        } else {
          const update = await userService.update(token.user, {
            verified: true,
            accept_terms: true,
          });
          return res.status(200).json({
            message: "Account verified successfully",
          });
        }
      } else {
        return res.status(200).json({
          message: "Please provide a valid token",
        });
      }
    } catch (error: any) {
      return res.status(404).json({
        error: error.message,
      });
    }
  };
  public static forgotPassword = (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "got to forgotPassword",
      });
    } catch (error: any) {
      return res.status(404).json({
        error: error.message,
      });
    }
  };
  public static sendVerificationCode = (
    email?: String,
    phone?: number,
    token?: String,
    otp?: String
  ) => {
    try {
      if (token && email) {
        Mailer.sendVerificationEmail(
          {
            email: email,
            token: token,
          },
          "https://qwerty.co.ke"
        );
      }
      if (otp && phone) {
        const message = `Your verification code is ${otp}`;
        //send otp confirmation
        Sms.SendSms(phone, message);
      }
      return {
        message: "VerificationCode sent",
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  public static changePassword = (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "got to changePassword",
      });
    } catch (error: any) {
      return res.status(404).json({
        error: error.message,
      });
    }
  };
}
export default AuthController;
