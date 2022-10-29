import { Request, Response, NextFunction } from "express";
import UserService from "../../service/user/user";

const userService = new UserService();
class UserController {
  /** User */
  /**
   *
   * @param req
   * @param res
   * @returns
   */
  public static create = (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      userService
        .add(payload)
        .then((data: any) => {
          if (data) {
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
          console.log("err", error);
          next(new Error(error.message));
        });
    } catch (error: any) {
      return res.status(404).json({
        error: error.message,
      });
    }
  };
  /**
   *
   * @param req
   * @param res
   * @returns
   */
  public static find = (req: Request, res: Response, next: NextFunction) => {
    try {
      userService
        .get()
        .then((data: any) => {
          if (data) {
            res.status(200).json({
              message: "Got users ",
              data: data,
            });
          } else {
            res.status(200).json({
              message: "User(s) not found",
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
  /**
   *
   * @param req
   * @param res
   * @returns
   */
  public static delete = (req: Request, res: Response, next: NextFunction) => {
    const user_id = 1;
    userService
      .delete(user_id)
      .then((data: any) => {
        if (data) {
          res.status(200).json({
            message: "got to find user ",
          });
        } else {
          res.status(200).json({
            message: "User(s) not found",
          });
        }
      })
      .catch((error: Error) => {
        next(new Error(error.message));
      });
  };
  /**
   *
   * @param req
   * @param res
   * @returns
   */
  public static update = (req: Request, res: Response, next: NextFunction) => {
    const updated_details = {};
    const id = req.body.user_id;
    userService
      .update(id, updated_details)
      .then((data: any) => {
        if (data) {
          res.status(200).json({
            message: "got to find user ",
          });
        } else {
          res.status(200).json({
            message: "User(s) not found",
          });
        }
      })
      .catch((error: Error) => {
        next(new Error(error.message));
      });
  };

  /** User details */
  /**
   *
   * @param req
   * @param res
   * @returns
   */
  public static createDetails = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
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
  /**
   *
   * @param req
   * @param res
   * @returns
   */
  public static findDetails = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
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
  /**
   *
   * @param req
   * @param res
   * @returns
   */
  public static deleteDetails = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
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
  /**
   *
   * @param req
   * @param res
   * @returns
   */
  public static updateDetails = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
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
}
export default UserController;
