import { Request, Response } from "express";
const home = (req: Request, res: Response) => {
  try {
    return res.render("home", { title: "Home", data: [] });
  } catch (error: any) {
    return res.render("error", { error: error });
  }
};
const login = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("signin", {
      title: "Login",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("error", { error: error });
  }
};
const register = (req: Request, res: Response) => {
  const messages: Array<String> = [];
  try {
    return res.render("signup", {
      title: "Sign up",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("error", { error: error });
  }
};
const verifyEmail = (req: Request, res: Response) => {
  try {
    return res.render("verify_email", { title: "verification", data: [] });
  } catch (error: any) {
    res.render("error", { error: error });
  }
};
const forgotPassword = (req: Request, res: Response) => {
  try {
    return res.render("forgot_password", { title: "forgot", data: [] });
  } catch (error: any) {
    res.render("error", { error: error });
  }
};
const changePassword = (req: Request, res: Response) => {
  try {
    return res.render("change_password", {
      title: "change password",
      data: [],
    });
  } catch (error: any) {
    res.render("error", { error: error });
  }
};
export default {
  home,
  login,
  register,
  verifyEmail,
  forgotPassword,
  changePassword,
};
