import { Request, Response, NextFunction } from "express";
import UserService from "../../service/user/user";
import Mailer from "../../../utils/Mailer";
import Jwt from "../../../utils/Jwt";
import Sms from "../../../utils/Sms";

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
            let phone = data.phone;
            let otp = (Math.random() * 1000).toString();
            let otp_hash = Jwt.signConfirmCodeToken(data.user, otp);
            if (phone) {
              this.sendVerificationCode(undefined, phone, undefined, otp);
            }
            if (email) {
              this.sendVerificationCode(email, undefined, otp_hash, undefined);
            }

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
  public static login = (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "got to login ",
      });
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
  public static verifyAccount = (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "got to verifyEmail",
      });
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
      if (token) {
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
