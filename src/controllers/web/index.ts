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
    res.render("pages/404", { error: error });
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
    res.render("pages/404", { error: error });
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
    res.render("pages/404", { error: error });
  }
};
const authenticate = (req: Request, res: Response) => {
  const messages: Array<String> = [];
  try {
    return res.redirect("/home");
  } catch (error: any) {
    res.render("pages/404", { error: error });
  }
};
const verifyEmail = (req: Request, res: Response) => {
  try {
    return res.render("Auth/email_verification", {
      title: "verification",
      data: [],
    });
  } catch (error: any) {
    res.render("pages/404", { error: error });
  }
};
const forgotPassword = (req: Request, res: Response) => {
  try {
    return res.render("Auth/auth-forgot-password", {
      title: "Forgot",
      data: [],
    });
  } catch (error: any) {
    res.render("pages/404", { error: error });
  }
};
const changePassword = (req: Request, res: Response) => {
  try {
    return res.render("change_password", {
      title: "change password",
      data: [],
    });
  } catch (error: any) {
    res.render("pages/404", { error: error });
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
      title: "Lock",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("pages/404", { error: error });
  }
};
const profile = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("User/user-profile", {
      title: "Profile",
      layout: "layoutDash",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("pages/404", { error: error });
  }
};
const UserList = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("User/user-list", {
      title: "User",
      layout: "layoutDash",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("pages/404", { error: error });
  }
};
const UserGrid = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("User/user-grid", {
      title: "User Grid",
      layout: "layoutDash",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("pages/404", { error: error });
  }
};
const AuthGroups = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("Auth/auth-group", {
      title: "User",
      layout: "layoutDash",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("pages/404", { error: error });
  }
};
const AuthPermissions = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("Auth/auth-permissions", {
      title: "User",
      layout: "layoutDash",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("pages/404", { error: error });
  }
};
const Organization = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("Organization/index", {
      title: "Organization",
      layout: "layoutDash",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("pages/404", { error: error });
  }
};
const Tenants = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("Tenant/index", {
      title: "Tenant",
      layout: "layoutDash",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("pages/404", { error: error });
  }
};
const Modules = (req: Request, res: Response) => {
  const messages: Array<Object> = [];
  try {
    return res.render("Modules/index", {
      title: "Modules",
      layout: "layoutDash",
      messages: messages,
      hasErrors: messages.length > 0,
    });
  } catch (error: any) {
    res.render("pages/404", { error: error });
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
  UserList,
  UserGrid,
  AuthGroups,
  AuthPermissions,
  Modules,
  Tenants,
  Organization,
};
