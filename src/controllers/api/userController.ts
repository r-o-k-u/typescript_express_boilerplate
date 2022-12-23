import { Request, Response, NextFunction } from "express";
import Handler from "../../utils/Handler";
/**
 * User controller
 * @remarks
 * Handles all user requests.
 */

import express from "express";
/**
 * User controller
 * @remarks
 * This class is responsible for managing users in the system.
 * It includes functions for creating new users, fetching users,
 * deleting users, and managing user profiles. It also includes functions for managing user groups and roles.
 */
export class UserController {
  /**
   * This function retrieves a list of all users. It gets the tenant ID from the request object, then uses the findAll function to retrieve the User records with the matching tenant ID. It then sends the list of users as the response.
   * @param req
   * @param res
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve all users
      const users = {}; // await User.findAll();
      if (users) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          users,
          "Users retrieved successfully"
        );
      } else {
        Handler.responseHandler(res, 404, "Not found", null, "Users not found");
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function retrieves a single user by ID. It gets the user ID from the request parameters,
   * then uses the findByPk function to retrieve
   * the User record with the matching ID. It then sends the user as the response.
   * @param req
   * @param res
   */
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve a single user by id
      const user = {}; // await User.findByPk(req.params.id);
      if (user) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          user,
          "user retrieved successfully"
        );
      } else {
        Handler.responseHandler(res, 404, "Not found", null, "User not found");
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function creates a new user.
   *  It gets the email, password, and name from the request body,
   * then uses the create function to insert a new User record into
   * the database with the current tenant ID and the provided email,
   * password, and name. It then sends the new user as the response.
   * @param req
   * @param res
   */
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // create a new user
      const user = {}; // await User.create(req.body);
      Handler.responseHandler(
        res,
        200,
        "Success",
        user,
        "user created successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   *  This function updates an existing user.
   * It gets the user ID from the request parameters,
   *  then gets the updated email, password, and name from the request body.
   * It uses the findByPk function to retrieve the existing user with the matching ID,
   * then updates its email, password, and name with the new values.
   * It then saves the updated user to the database
   * and sends a response indicating that the update was successful.
   * @param req
   * @param res
   */
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      // update an existing user
      const user = {}; // await User.findByPk(req.params.id);
      //user.update(req.body);
      Handler.responseHandler(
        res,
        200,
        "Success",
        user,
        "user updated successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function deletes an existing user.
   * It gets the user ID from the request parameters,
   *  then uses the destroy function to delete the User record with the matching ID.
   *  It then sends a response indicating that the user was deleted successfully.
   * @param req
   * @param res
   */
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      // delete an existing user
      const user = {}; // await User.findByPk(req.params.id);
      //user.destroy();
      Handler.responseHandler(
        res,
        200,
        "Success",
        user,
        "user deleted successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function retrieves the profile for a user.
   *  It gets the user ID from the request parameters,
   *  then uses the findByPk function to retrieve the User record with the matching ID.
   *  It then sends the user's profile as the response.
   * @param req
   * @param res
   */
  static async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      // get the user's profile
      const userId = null; //req.user!.id;
      const user = {}; /*  await User.findByPk(userId, {
        include: [{ model: UserDetail }],
      }); */
      if (user) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          user,
          "User retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Tenant not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function updates a user's profile.
   * It gets the user ID from the request parameters,
   * then gets the updated name, email, phone,
   * and avatar from the request body.
   *  It uses the findByPk function to retrieve the existing user with the matching ID,
   *  then updates its name, email, phone, and avatar with the new values.
   *  It then saves the updated user to the database and sends a response indicating that the update was successful.
   * @param req
   * @param res
   */
  static async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      // update the user's profile
      const userId = null; // req.user!.id;
      const { firstName, lastName, email, phone } = req.body;
      const user: any = null; //await User.findByPk(userId);
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.phone = phone;
      await user.save();
      res.send({ message: "Profile updated successfully" });
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function adds a user to a user group.
   * It gets the user ID and user group ID from the request parameters,
   *  then uses the create function to insert a new UserGroup record into the database with the matching user ID and user group ID.
   *  It then sends a response indicating that the user was added to the group successfully.
   * @param req
   * @param res
   */
  async addUserToGroup(req: Request, res: Response, next: NextFunction) {
    // Get user ID and user group ID from request parameters
    //const { userId, groupId } = req.params;

    // Insert new UserGroup record into database with matching user ID and user group ID
    const userGroup: any = {}; /* await UserGroup.create({
      userId: userId,
      groupId: groupId,
    }); */

    // Send response indicating that user was added to group successfully
    Handler.responseHandler(
      res,
      200,
      "Success",
      userGroup,
      "user added to group successfully"
    );
  }
  /**
   * This function removes a user from a user group.
   * It gets the user ID and user group ID from the request parameters,
   * then uses the destroy function to delete the UserGroup record with the matching user ID and user group ID.
   * It then sends a response indicating that the user was removed from the group successfully.
   * @param req
   * @param res
   */
  async removeUserFromGroup(req: Request, res: Response, next: NextFunction) {
    // Get user ID and user group ID from request parameters
    const { userId, groupId } = req.params;

    // Delete UserGroup record with matching user ID and user group ID
    /*  await UserGroup.destroy({
      where: {
        userId: userId,
        groupId: groupId,
      },
    }); */

    // Send response indicating that user was removed from group successfully
    Handler.responseHandler(
      res,
      200,
      "Success",
      null,
      "User removed from group successfully"
    );
  }
  /**
   * This function retrieves a list of user groups that a user belongs to.
   *  It gets the user ID from the request parameters,
   * then uses the findAll function with a join clause to retrieve the UserGroup
   * records with the matching user ID. It then sends the list of user groups as the response.
   * @param req
   * @param res
   */
  static async getGroups(req: Request, res: Response, next: NextFunction) {
    try {
      // get the user's groups
      /* const userId = req.user!.id;
      const user = await User.findByPk(userId, {
        include: [{ model: UserGroup, include: [{ model: AuthGroup }] }],
      }); */
      const groups = null; // user.UserGroups.map((group) => group.AuthGroup);
      if (groups) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          groups,
          "Groups retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Tenant not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function adds a user to a user group.
   * It gets the user ID and user group ID from the request parameters,
   *  then uses the create function to insert a new UserGroup record into the database
   * with the matching user ID and user group ID.
   * It then sends a response indicating that the user was added to the group successfully.
   * @param req
   * @param res
   */
  static async updateGroups(req: Request, res: Response, next: NextFunction) {
    try {
      // update the user's groups
      const userId = null; //req.user!.id;
      const groupIds = req.body.groupIds;
      /* await UserGroup.destroy({ where: { userId } });
      const groups = groupIds.map((groupId) => ({ userId, groupId }));
      await UserGroup.bulkCreate(groups); */
      Handler.responseHandler(
        res,
        200,
        "Success",
        groupIds,
        "Groups updated successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }

  /**
   * This function gets the user ID from the request parameters,
   *  then uses the findByPk function to retrieve the User record with the matching ID.
   * It uses the include method to also retrieve the user's roles along with their corresponding names and descriptions.
   *  Finally, it sends the user's roles as the response.
   * @param req
   * @param res
   */
  async getRoles(req: Request, res: Response, next: NextFunction) {
    // Get user ID from request parameters
    const { id } = req.params;

    // Use Sequelize's `include` method to retrieve user's roles along with their corresponding names and descriptions
    const roles: any = {}; /* await User.findByPk(id, {
      include: [
        {
          model: AuthRole,
          as: "roles",
          attributes: ["name", "description"],
        },
      ],
    }); */

    // Send response with user's roles
    if (roles) {
      Handler.responseHandler(
        res,
        200,
        "Success",
        roles,
        "Roles retrieved successfully"
      );
    } else {
      Handler.responseHandler(res, 404, "Not found", null, "Roles not found");
    }
  }
}

export default {
  UserController,
};