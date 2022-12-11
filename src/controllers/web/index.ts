import { Request, Response } from "express";
const home = (req: Request, res: Response) => {
  try {
    return res.render("pages/landing", {
      layout: "layout",
      title: "Homes",
      data: [],
    });
  } catch (error: any) {
    return res.render("pages/404", { error: error });
  }
};
const login = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("Auth/auth-login", {
      title: "Login",
      layout: "layoutPlain",
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
    return res.render("Auth/auth-register", {
      title: "Sign up",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("error", { error: error });
  }
};
const ConfirmRegister = (req: Request, res: Response) => {
  const messages: Array<String> = [];
  try {
    return res.render("Auth/auth-login", {
      title: "Login",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("error", { error: error });
  }
};
const authenticate = (req: Request, res: Response) => {
  const messages: Array<String> = [];
  try {
    return res.redirect("/home");
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
    return res.render("Auth/auth-forgot-password", {
      title: "forgot",
      data: [],
    });
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
const dashboard = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("Dashboard/index", {
      title: "Dashboard",
      layout: "layoutDash",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("Auth/auth-login", { error: error });
  }
};
const lock = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("Auth/auth-lock-screen", {
      title: "Dashboard",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("error", { error: error });
  }
};
const profile = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("Dashboard/index", {
      title: "Dashboard",
      messages: messages,
      hasErrors: messages.length > 0,
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
  dashboard,
  lock,
  profile,
  ConfirmRegister,
  authenticate,
};
