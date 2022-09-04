import { Request, Response } from "express";
/** User */
const createUser = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to create user",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const findUser = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to find user ",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const deleteUser = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to delete user",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const updateUser = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to update user",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
/** User details */
const createUserDetails = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to create user details",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const findUserDetails = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to find user details ",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const deleteUserDetails = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to delete user details",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
const updateUserDetails = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "got to update user details",
    });
  } catch (error: any) {
    return res.status(404).json({
      error: error.message,
    });
  }
};

export default {
  updateUser,
  deleteUser,
  findUser,
  createUser,
  updateUserDetails,
  deleteUserDetails,
  findUserDetails,
  createUserDetails,
};
