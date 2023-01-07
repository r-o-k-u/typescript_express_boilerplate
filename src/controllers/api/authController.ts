import { Request, Response, NextFunction } from "express";
import Handler from "../../providers/Handler";
import {
  AuthGroupService,
  AuthPermissionService,
  AuthRoleService,
  AuthenticationService,
} from "../../services/authService";
import { UserService } from "../../services/userService";
/**
 * Auth controller
 * @remarks
 * Handles all authentication/ authorization  requests.
 */

/**
 * AuthGroupController
 * @remarks
 * This class is responsible for managing user groups in the system. It includes functions for creating new user groups,
 * fetching user groups for a particular tenant or organization, and deleting user groups
 */
export class AuthGroupController {
  /**
   *  This function retrieves a list of all authentication groups.
   * It gets the tenant ID from the request object,
   *  then uses the findAll function to retrieve the AuthGroup records with the matching tenant ID.
   * It then sends the list of authentication groups as the response.
   * @param req
   * @param res
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve all auth groups
      const authGroups = await AuthGroupService.getAll(req.params.database);
      if (authGroups) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          authGroups,
          "Auth Groups retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "auth Groups not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function retrieves a single authentication group by ID.
   * It gets the authentication group ID from the request parameters,
   *  then uses the findByPk function to retrieve the AuthGroup record with the matching ID.
   * It then sends the authentication group as the response.
   * @param req
   * @param res
   */
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve a single auth group by id
      let { id } = req.params;
      const authGroup = await AuthGroupService.getById(
        req.params.database,
        parseInt(id)
      );
      if (authGroup) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          authGroup,
          "Auth Group retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Auth Group not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function creates a new authentication group.
   * It gets the name and description from the request body,
   *  then uses the create function to insert a new AuthGroup record into
   * the database with the current tenant ID and the provided name
   * and description. It then sends the new authentication group as the response.
   * @param req
   * @param res
   */
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // create a new auth group
      const authGroup = await AuthGroupService.create(
        req.params.database,
        req.body
      );
      Handler.responseHandler(
        res,
        200,
        "Success",
        authGroup,
        "Auth Group created successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function updates an existing authentication group.
   * It gets the authentication group ID from the request parameters,
   *  then gets the updated name and description from the request body.
   *  It uses the findByPk function to retrieve the existing authentication group with the matching ID,
   *  then updates its name and description with the new values.
   *  It then saves the updated authentication group to the database
   *  and sends a response indicating that the update was successful.
   * @param req
   * @param res
   */
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      let { id } = req.params;
      // update an existing auth group
      const authGroup = await AuthGroupService.update(
        req.params.database,
        parseInt(id),
        req.body
      );
      Handler.responseHandler(
        res,
        200,
        "Success",
        authGroup,
        "Auth Group updated successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function deletes an existing authentication group.
   * It gets the authentication group ID from the request parameters,
   *  then uses the destroy function to delete the AuthGroup record with the matching ID.
   * It then sends a response indicating that the authentication group was deleted successfully.
   * @param req
   * @param res
   */
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      let { id } = req.params;
      // delete an existing auth group
      const authGroup = await AuthGroupService.delete(
        req.params.database,
        parseInt(id)
      );
      //authGroup.destroy();
      Handler.responseHandler(
        res,
        200,
        "Success",
        authGroup,
        "Auth Group deleted successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
}

/**
 * AuthPermissionController
 * @remarks
 * This class is responsible for managing permissions in the system. It includes functions for creating new permissions,
 * fetching permissions for a particular tenant or organization, and deleting permissions.
 */
export class AuthPermissionController {
  /**
   * This function retrieves a list of all authentication permissions.
   * It gets the tenant ID from the request object,
   * then uses the findAll function to retrieve the AuthPermission records with the matching tenant ID.
   * It then sends the list of authentication permissions as the response.
   * @param req
   * @param res
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve all auth permissions
      const authPermissions = await AuthPermissionService.getAll(
        req.params.database
      );
      if (authPermissions) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          authPermissions,
          "Auth Permissions retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Auth Permissions not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function retrieves a single authentication permission by ID.
   *  It gets the authentication permission ID from the request parameters,
   * then uses the findByPk function to retrieve the AuthPermission record with the matching ID.
   *  It then sends the authentication permission as the response.
   * @param req
   * @param res
   */
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve a single auth permission by id
      let { id } = req.params;
      const authPermission = await AuthPermissionService.getById(
        req.params.database,
        parseInt(id)
      );
      if (authPermission) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          authPermission,
          "Auth Permission retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Auth Permission not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function creates a new authentication permission.
   * It gets the name, description, and level from the request body,
   * then uses the create function to insert a new AuthPermission record into the database with the current tenant ID and the provided name, description, and level.
   * It then sends the new authentication permission as the response.
   * @param req
   * @param res
   */
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // create a new auth permission
      const authPermission = await AuthPermissionService.create(
        req.params.database,
        req.body
      );
      Handler.responseHandler(
        res,
        200,
        "Success",
        authPermission,
        "Auth Permission created successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function updates an existing authentication permission.
   * It gets the authentication permission ID from the request parameters,
   * then gets the updated name, description, and level from the request body.
   * It uses the findByPk function to retrieve the existing authentication permission with the matching ID,
   * then updates its name, description, and level with the new values.
   * It then saves the updated authentication permission to the database
   * and sends a response indicating that the update was successful.
   * @param req
   * @param res
   */
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      let { id } = req.params;
      // update an existing auth permission
      const authPermission = await AuthPermissionService.update(
        req.params.database,
        parseInt(id),
        req.body
      );
      Handler.responseHandler(
        res,
        200,
        "Success",
        authPermission,
        "Auth Permission updated successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
}

/**
 * AuthRoleController
 * @remarks
 * This class is responsible for managing roles in the system. It includes functions for creating new roles,
 * fetching roles for a particular tenant or organization, and deleting roles.
 */
export class AuthRoleController {
  /**
   * This function retrieves a list of all authentication roles.
   *  It gets the tenant ID from the request object, then uses the findAll
   * function to retrieve the AuthRole records with the matching tenant ID.
   * It then sends the list of authentication roles as the response.
   * @param req
   * @param res
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve all auth roles
      const authRoles = await AuthRoleService.getAll(req.params.database);
      if (authRoles) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          authRoles,
          "Auth Roles retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Auth Roles not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function retrieves a single authentication role by ID.
   * It gets the authentication role ID from the request parameters,
   * then uses the findByPk function to retrieve the AuthRole record with the matching ID.
   *  It then sends the authentication role as the response.
   * @param req
   * @param res
   */
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve a single auth role by id
      let { id } = req.params;
      const authRole = await AuthRoleService.getById(
        req.params.database,
        parseInt(id)
      );
      if (authRole) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          authRole,
          "Auth Role retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Auth Role not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   *  This function creates a new authentication role.
   * It gets the name, description, and level from the request body,
   * then uses the create function to insert a new AuthRole record into the database with
   * the current tenant ID and the provided name, description, and level.
   * It then sends the new authentication role as the response.
   * @param req
   * @param res
   */
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // create a new auth role
      const authRole = await AuthRoleService.create(
        req.params.database,
        req.body
      );
      Handler.responseHandler(
        res,
        200,
        "Success",
        authRole,
        "Auth Role created successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function updates an existing authentication role.
   *  It gets the authentication role ID from the request parameters,
   *  then gets the updated name, description, and level from the request body.
   * It uses the findByPk function to retrieve the existing authentication role with the matching ID,
   * then updates its name, description, and level with the new values.
   *  It then saves the updated authentication role to the database and sends a response indicating that the update was successful.
   * @param req
   * @param res
   */
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      let { id } = req.params;
      // update an existing auth role
      const authRole = await AuthRoleService.update(
        req.params.database,
        parseInt(id),
        req.body
      );
      Handler.responseHandler(
        res,
        200,
        "Success",
        authRole,
        "Auth Role updated successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function deletes an existing authentication role.
   *  It gets the authentication role ID from the request parameters,
   * then uses the destroy function to delete the AuthRole record with the matching ID.
   * It then sends a response indicating that the authentication role was deleted successfully.
   * @param req
   * @param res
   */
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      let { id } = req.params;
      // delete an existing auth role
      const authRole = await AuthRoleService.delete(
        req.params.database,
        parseInt(id)
      );
      Handler.responseHandler(
        res,
        200,
        "Success",
        authRole,
        "Auth Role deleted successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
}
/**
 * AuthenticationController
 * @remarks
 * This class is responsible for managing user authentication in the system. It includes functions for logging in and logging out, as well as functions for email and phone two-factor authentication, password reset, and email verification.
 */
export class AuthenticationController {
  /**
   *  This function registers a new user for the API.
   *  It gets the email, password, and name from the request body,
   * then uses the create function to insert a new User record into the database
   *  with the current tenant ID and the provided email, password,
   * and name. It then sends a response indicating that the registration was successful.
   * @param req
   * @param res
   */
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      // register a new user
      const user = await AuthenticationService.register(
        req.params.database,
        req.body
      );
      Handler.responseHandler(
        res,
        200,
        "Success",
        user,
        "User registered successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function logs a user in to the API.
   * It gets the email and password from the request body,
   *  then uses the findOne function to retrieve the User record with the matching email.
   *  It then checks if the password matches the password stored in the user's record,
   * and sends a response indicating whether the login was successful or not.
   *  If the login is successful,
   * it also creates a new session for the user and sends the session ID as part of the response.
   * @param req
   * @param res
   */
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      // login an existing user
      const email = req.body.email;
      const password = req.body.password;
      const user = await AuthenticationService.login(
        req.params.database,
        req.body
      );
      if (!user) {
        Handler.responseHandler(
          res,
          401,
          "Unauthorized",
          null,
          "Invalid email or password"
        );
      } else if (user) {
        // create a session for the user
        /* req.session!.userId = user.user.id;
        req.session!.save((error: any) => {
          if (error) {
            Handler.errorHandler(error, req, res, next);
          }
        }); */
        Handler.responseHandler(res, 200, "Success", user, "Login Successful");
      } else {
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function logs a user out of the API.
   * It gets the session ID from the request object,
   * then uses the destroy function to delete the Session record with the matching ID.
   * It then sends a response indicating that the logout was successful.
   * @param req
   * @param res
   */
  static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      /* req.session!.destroy(async(error :Error) => {
        if (error) {
           return error
        } else {
         const logout = await AuthenticationService.logout(
           req.params.database,
           req.body
         );
        }
      });  */

      Handler.responseHandler(
        res,
        200,
        "Success",
        null,
        "Logged out successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   *  This function refreshes an authentication token for a user.
   * It gets the refresh token from the request body, then uses the findOne function to retrieve
   * the RefreshToken record with the matching token.
   *  It then checks if the refresh token is still valid,
   * and sends a new authentication token as the response if it is.
   * @param req
   * @param res
   */
  static async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      // verify the refresh token provided by the user
      const refreshToken = req.body.refreshToken;
      const token: any = await AuthenticationService.verifyToken(req.body);
      if (!token || !token.userId) {
        Handler.responseHandler(
          res,
          401,
          "Unauthorized",
          null,
          "Invalid refresh token"
        );
      } else {
        // create a new JWT token for the user
        const newToken = await AuthenticationService.generateRefreshToken({
          userId: token.userId,
        });
        Handler.responseHandler(
          res,
          200,
          "Success",
          { token: newToken },
          "Token refreshed successfully"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function initiates a password reset process for a user.
   * It gets the email from the request body,
   * then uses the findOne function to retrieve the User record with the matching email.
   * It then generates a new code for the user,
   * stores it in the user's record, and sends the code to the user via email.
   * @param req
   * @param res
   */
  static async forgetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      // send a password reset email to the user
      const user: any = null; //await UserService.findOne(req.params.database,req.body);
      if (!user) {
        Handler.responseHandler(res, 404, "Success", null, "User not found");
      } else {
        // generate a password reset token
        const resetToken = await AuthenticationService.generateResetToken(
          req.params.database,
          req.body
        );
        // update user token
        const user_update = await AuthenticationService.updateUserToken(
          req.params.database,
          req.body,
          user.id
        );

        // send the password reset notification
        await AuthenticationService.sendPasswordResetNotification(
          user,
          resetToken
        );
        Handler.responseHandler(
          res,
          200,
          "Success",
          null,
          "Password reset email sent"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function resets a user's password.
   * It gets the user ID, code, and new password from the request body,
   * then uses the findByPk function to retrieve the User record with the matching ID.
   * It then checks if the code matches the code stored in the user's record,
   * and updates the user's password with the new password if it does.
   * It then sends a response indicating whether the password reset was successful or not.
   * @param req
   * @param res
   */
  static async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      // reset the user's password
      let { id } = req.params;
      const user: any = await UserService.getById(
        req.params.database,
        parseInt(id)
      );
      if (!user) {
        Handler.responseHandler(res, 404, "Success", null, "User not found");
      } else {
        // gener
        const user: any = null;
        await UserService.updatePassword(
          req.params.database,
          req.body,
          user.id
        );
        if (!user) {
          Handler.responseHandler(
            res,
            404,
            "Not Found",
            null,
            "Invalid password reset token"
          );
        } else {
          // check if the password reset token has expired
          if (user.resetTokenExpiration < Date.now()) {
            Handler.responseHandler(
              res,
              401,
              "Unauthorized",
              null,
              "Password reset token expired"
            );
          } else {
            // set the new password and clear the reset token
            user.password = req.body.password;
            user.resetToken = null;
            user.resetTokenExpiration = null;
            await user.save();

            Handler.responseHandler(
              res,
              200,
              "Success",
              null,
              "Password reset successful"
            );
          }
        }
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function initiates a two-factor authentication process for a user.
   * It gets the user ID and method (email or phone) from the request body,
   * then uses the findByPk function to retrieve the User record with the matching ID.
   * It then generates a new code for the user, stores it in the user's record,
   * and sends the code to the user via the specified method.
   * @param req
   * @param res
   */
  static async twoFactorAuth(req: Request, res: Response, next: NextFunction) {
    try {
      // send a two-factor authentication code to the user's phone or email
      const user: any = await AuthenticationService.twoFactorAuth(
        req.params.database,
        req.body
      );
      if (!user) {
        Handler.responseHandler(res, 404, "Not Found", null, "User not found");
      } else {
        Handler.responseHandler(
          res,
          200,
          "Success",
          null,
          "Two-factor authentication code sent"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function verifies an authentication code sent to a user via email or phone.
   * It gets the user ID, code type, and code from the request body,
   * then uses the findByPk function to retrieve the User record with the matching ID.
   * It then checks if the code matches the code stored in the user's record,
   * and sends a response indicating whether the code was verified successfully or not.
   * @param req
   * @param res
   */
  static async verifyAuthCode(req: Request, res: Response, next: NextFunction) {
    try {
      // verify the two-factor authentication code provided by the user
      const code: any = await AuthenticationService.verifyAuthCode(
        req.params.database,
        req.body
      );
      if (!code) {
        Handler.responseHandler(res, 404, "Not Found", null, "User not found");
      } else {
        if (code.authCode !== code || code.authCodeExpiration < Date.now()) {
          Handler.responseHandler(
            res,
            401,
            "Unauthorized",
            null,
            "Invalid two-factor authentication code"
          );
        } else {
          Handler.responseHandler(
            res,
            200,
            "Success",
            null,
            "Two-factor authentication successful"
          );
        }
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function authenticates an API request.
   * It gets the API key from the request headers, then uses the findOne function to retrieve
   *  the ApiKey record with the matching key.
   * It then checks if the API key is valid and sends a response indicating whether
   *  the request was authenticated or not
   * @param req
   * @param res
   */
  static async apiAuthentication(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      // authenticate the API request
      const auth: any = await AuthenticationService.apiAuthentication(
        req.params.database,
        req.body
      );
      if (!auth) {
        Handler.responseHandler(
          res,
          401,
          "Unauthorized",
          null,
          "Invalid API key or secret"
        );
      } else {
        Handler.responseHandler(
          res,
          200,
          "Success",
          auth,
          "API authentication successful"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
}

export default {
  AuthenticationController,
  AuthRoleController,
  AuthPermissionController,
  AuthGroupController,
};
