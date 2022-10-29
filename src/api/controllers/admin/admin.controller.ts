import { Request, Response } from "express";
/** Admin Roles  */
const createAdminRole = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to admin role",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const findAdminRole = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to admin role find ",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const deleteAdminRole = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to admin role delete",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const updateAdminRole = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to admin role update",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};

/** Admin Groups  */
const createAdminGroup = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to admin group create",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const findAdminGroup = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to admin group find ",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const deleteAdminGroup = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to admin group create",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const updateAdminGroup = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to admin group update",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};

export default {
  createAdminGroup,
  findAdminGroup,
  deleteAdminGroup,
  updateAdminGroup,
  createAdminRole,
  findAdminRole,
  deleteAdminRole,
  updateAdminRole,
};
