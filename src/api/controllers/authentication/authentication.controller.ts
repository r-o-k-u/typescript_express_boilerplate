import { Request, Response } from "express";
const register = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to register",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const login = (req: Request, res: Response) => {
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
const logout = (req: Request, res: Response) => {
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
const verifyEmail = (req: Request, res: Response) => {
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
const refreshToken = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to refreshToken",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const forgotPassword = (req: Request, res: Response) => {
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
const sendVerificationCode = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to sendVerificationCode",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const changePassword = (req: Request, res: Response) => {
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
export default {
  register,
  login,
  logout,
  verifyEmail,
  refreshToken,
  forgotPassword,
  sendVerificationCode,
  changePassword,
};
