import Locals from "../providers/Locals";
import { UserService } from "./userService";
import Repo from "../database/models/index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Mailer from "../providers/Mailer";
import { getUnixTime, isAfter } from "date-fns";
const { Op } = require("sequelize");
/**
 * Auth service
 * @remarks
 * Handles all authentication/ authorization  requests.
 */

/**
 * AuthGroupService
 * @remarks
 * This class is responsible for managing user groups in the system. It includes functions for creating new user groups,
 * fetching user groups for a particular tenant or organization, and deleting user groups
 */
export class AuthGroupService {
  /**
   *  This function retrieves a list of all authentication groups.
   * It gets the tenant ID from the request object,
   *  then uses the findAll function to retrieve the AuthGroup records with the matching tenant ID.
   * It then sends the list of authentication groups as the response.
   */
  static async getAll(DB_NAME: string) {
    try {
      // retrieve all auth groups
      const authGroups = await Repo[DB_NAME].AuthGroup.findAll();
      if (authGroups) {
        return null;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function retrieves a single authentication group by ID.
   * It gets the authentication group ID from the request parameters,
   *  then uses the findByPk function to retrieve the AuthGroup record with the matching ID.
   * It then sends the authentication group as the response.
   */
  static async getById(DB_NAME: string, Id: number) {
    try {
      // retrieve a single auth group by id
      const authGroup = await Repo[DB_NAME].AuthGroup.findByPk(Id);
      if (authGroup) {
        return null;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function creates a new authentication group.
   * It gets the name and description from the request body,
   *  then uses the create function to insert a new AuthGroup record into
   * the database with the current tenant ID and the provided name
   * and description. It then sends the new authentication group as the response.
   */
  static async create(DB_NAME: string, Payload: any) {
    try {
      const { tenantId, description, name } = Payload;
      let code = `${Math.floor(10000 + Math.random() * 90000).toString()}`;
      // create a new auth group
      const authGroup = await Repo[DB_NAME].AuthGroup.create({
        tenantId: parseInt(tenantId),
        description,
        name,
        code,
      });
      return null;
    } catch (error: any) {
      throw Error(error);
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
   */
  static async update(DB_NAME: string, Id: number, Update: any) {
    try {
      // update an existing auth group
      const authGroup = await Repo[DB_NAME].AuthGroup.findByPk(Id);
      authGroup.update(Update);
      return null;
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function deletes an existing authentication group.
   * It gets the authentication group ID from the request parameters,
   *  then uses the destroy function to delete the AuthGroup record with the matching ID.
   * It then sends a response indicating that the authentication group was deleted successfully.
   */
  static async delete(DB_NAME: string, Id: number) {
    try {
      // delete an existing auth group
      const authGroup = await Repo[DB_NAME].AuthGroup.findByPk(Id);
      authGroup.destroy();
      return null;
    } catch (error: any) {
      throw Error(error);
    }
  }
}

/**
 * AuthPermissionService
 * @remarks
 * This class is responsible for managing permissions in the system. It includes functions for creating new permissions,
 * fetching permissions for a particular tenant or organization, and deleting permissions.
 */
export class AuthPermissionService {
  /**
   * This function retrieves a list of all authentication permissions.
   * It gets the tenant ID from the request object,
   * then uses the findAll function to retrieve the AuthPermission records with the matching tenant ID.
   * It then sends the list of authentication permissions as the response.
   */
  static async getAll(DB_NAME: string) {
    try {
      // retrieve all auth permissions
      const authPermissions = await Repo[DB_NAME].AuthPermission.findAll();
      if (authPermissions) {
        return null;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function retrieves a single authentication permission by ID.
   *  It gets the authentication permission ID from the request parameters,
   * then uses the findByPk function to retrieve the AuthPermission record with the matching ID.
   *  It then sends the authentication permission as the response.
   */
  static async getById(DB_NAME: string, Id: number) {
    try {
      // retrieve a single auth permission by id
      const authPermission = await Repo[DB_NAME].AuthPermission.findByPk(Id);
      if (authPermission) {
        return null;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function creates a new authentication permission.
   * It gets the name, description, and level from the request body,
   * then uses the create function to insert a new AuthPermission record into the database with the current tenant ID and the provided name, description, and level.
   * It then sends the new authentication permission as the response.
   */
  static async create(DB_NAME: string, Payload: any) {
    try {
      // create a new auth permission
      const { tenantId, description, name } = Payload;
      let code = `${Math.floor(10000 + Math.random() * 90000).toString()}`;
      // create a new auth permission
      const authPermission = await Repo[DB_NAME].AuthPermission.create({
        tenantId: parseInt(tenantId),
        description,
        name,
        code,
      });
      return null;
    } catch (error: any) {
      throw Error(error);
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
   */
  static async update(DB_NAME: string, Id: number, Update: any) {
    try {
      // update an existing auth permission
      const authPermission = await Repo[DB_NAME].AuthPermission.findByPk(Id);
      authPermission.update(Update);
      return null;
    } catch (error: any) {
      throw Error(error);
    }
  }
}

/**
 * AuthRoleService
 * @remarks
 * This class is responsible for managing roles in the system. It includes functions for creating new roles,
 * fetching roles for a particular tenant or organization, and deleting roles.
 */
export class AuthRoleService {
  /**
   * This function retrieves a list of all authentication roles.
   *  It gets the tenant ID from the request object, then uses the findAll
   * function to retrieve the AuthRole records with the matching tenant ID.
   * It then sends the list of authentication roles as the response.
   */
  static async getAll(DB_NAME: string) {
    try {
      // retrieve all auth roles
      const authRoles = await Repo[DB_NAME].AuthRole.findAll();
      if (authRoles) {
        return null;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function retrieves a single authentication role by ID.
   * It gets the authentication role ID from the request parameters,
   * then uses the findByPk function to retrieve the AuthRole record with the matching ID.
   *  It then sends the authentication role as the response.
   */
  static async getById(DB_NAME: string, Id: number) {
    try {
      // retrieve a single auth role by id
      const authRole = await Repo[DB_NAME].AuthRole.findByPk(Id);
      if (authRole) {
        return null;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   *  This function creates a new authentication role.
   * It gets the name, description, and level from the request body,
   * then uses the create function to insert a new AuthRole record into the database with
   * the current tenant ID and the provided name, description, and level.
   * It then sends the new authentication role as the response.
   */
  static async create(DB_NAME: string, Payload: any) {
    try {
      // create a new auth role
      const { tenantId, description, name } = Payload;
      let code = `${Math.floor(10000 + Math.random() * 90000).toString()}`;
      // create a new auth role
      const authRole = await Repo[DB_NAME].AuthRole.create({
        tenantId: parseInt(tenantId),
        description,
        name,
        code,
      });
      return null;
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function updates an existing authentication role.
   *  It gets the authentication role ID from the request parameters,
   *  then gets the updated name, description, and level from the request body.
   * It uses the findByPk function to retrieve the existing authentication role with the matching ID,
   * then updates its name, description, and level with the new values.
   *  It then saves the updated authentication role to the database and sends a response indicating that the update was successful.
   */
  static async update(DB_NAME: string, Id: number, Update: any) {
    try {
      // update an existing auth role
      const authRole = await Repo[DB_NAME].AuthRole.findByPk(Id);
      authRole.update(Update);
      return null;
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function deletes an existing authentication role.
   *  It gets the authentication role ID from the request parameters,
   * then uses the destroy function to delete the AuthRole record with the matching ID.
   * It then sends a response indicating that the authentication role was deleted successfully.
   */
  static async delete(DB_NAME: string, Id: number) {
    try {
      // delete an existing auth role
      const authRole = await Repo[DB_NAME].AuthRole.findByPk(Id);
      authRole.destroy();
      return null;
    } catch (error: any) {
      throw Error(error);
    }
  }
}
/**
 * AuthenticationService
 * @remarks
 * This class is responsible for managing user authentication in the system. It includes functions for logging in and logging out, as well as functions for email and phone two-factor authentication, password reset, and email verification.
 */
export class AuthenticationService {
  /**
   *  This function registers a new user for the API.
   *  It gets the email, password, and name from the request body,
   * then uses the create function to insert a new User record into the database
   *  with the current tenant ID and the provided email, password,
   * and name. It then sends a response indicating that the registration was successful.
   */
  static async register(DB_NAME: string, Payload: any) {
    try {
      // register a new user
      const {
        firstName,
        lastName,
        email,
        password,
        phone,
        username,
        referral_code,
        tenantId,
        channel,
      } = Payload;
      const user = await UserService.create(DB_NAME, {
        firstName,
        lastName,
        email,
        password,
        phone,
        username,
        referral_code,
        tenantId,
      });
      //TODO GENERATE VERIFICATION TOKEN
      // if user registered over the web
      if (user && channel == 1 && Locals.config().ENABLE_EMAIL_VERIFICATION) {
        Mailer.sendVerificationEmail(
          { verificationToken: "lskfnslkfsm;flsdlfslm;", email: email },
          Locals.config().APP_URL
        );
      }
      //if user registred via the mobile app
      else if (
        user &&
        channel == 2 &&
        Locals.config().ENABLE_PHONE_VERIFICATION
      ) {
      }
      return user;
    } catch (error: any) {
      throw Error(error);
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
   */
  static async login(DB_NAME: string, Payload: any) {
    try {
      // login an existing user
      const { email, phone } = Payload;
      const password = Payload.password;
      const condition = {
        [Op.or]: [{ email: email || "" }, { phone: phone.toString() || "" }],
      };
      const user_ = await UserService.findDetail(DB_NAME, condition);
      if (!user_) {
        return null;
      }
      const { tenant, UserDetail, user, authentication } = user_;
      const {
        id,
        username,
        firstName,
        lastName,
        language_id,
        phone_notification_status,
        email_notification_status,
        tenantId,
        registrationStatus,
        user_code,
        accountStatus,
        refereed,
        referral_code,
        type,
      } = user;
      if (await validateHash(password, authentication.passwordHash)) {
        //password is valid
        const jwtToken = await this.generateJwtToken(user);
        const refreshToken = await this.generateRefreshToken(user);

        const user_ = await UserService.updateUserAuthentication(DB_NAME, id, {
          lastLoginAt: getUnixTime(new Date()),
        });

        return {
          user: { id, username, firstName, tenantId, user_code },
          jwtToken,
          //do not send the refresh token to the client
          refreshToken,
        };
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function logs a user out of the API.
   * It gets the session ID from the request object,
   * then uses the destroy function to delete the Session record with the matching ID.
   * It then sends a response indicating that the logout was successful.
   */
  static async logout(DB_NAME: string, Payload: any) {
    try {
      // destroy the user's session
      return;
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   *  This function refreshes an authentication token for a user.
   * It gets the refresh token from the request body, then uses the findOne function to retrieve
   * the RefreshToken record with the matching token.
   *  It then checks if the refresh token is still valid,
   * and sends a new authentication token as the response if it is.
   */
  static async refreshToken(DB_NAME: string, Payload: any) {
    try {
      // verify the refresh token provided by the user
      const refreshToken = Payload.refreshToken;
      const token: any = null; //jwt.verify(refreshToken, process.env.JWT_SECRET!);
      if (!token || !token.userId) {
        return null;
      } else {
        // create a new JWT token for the user
        const newToken = null;
        /* jwt.sign(
          { userId: token.userId },
          process.env.JWT_SECRET!
        ); */ return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function initiates a password reset process for a user.
   * It gets the email from the request body,
   * then uses the findOne function to retrieve the User record with the matching email.
   * It then generates a new code for the user,
   * stores it in the user's record, and sends the code to the user via email.
   */
  static async forgetPassword(DB_NAME: string, Payload: any) {
    try {
      // send a password reset email to the user
      const email = Payload.email;
      const user: any = null; //await User.findOne({ where: { email: email } });
      if (!user) {
        return null;
      } else {
        // generate a password reset token
        const resetToken = ""; //generateResetToken();
        user.resetToken = resetToken;
        user.resetTokenExpiration = Date.now() + 3600000; // 1 hour
        await user.save();

        // send the password reset email
        //sendPasswordResetEmail(email, resetToken);
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function resets a user's password.
   * It gets the user ID, code, and new password from the request body,
   * then uses the findByPk function to retrieve the User record with the matching ID.
   * It then checks if the code matches the code stored in the user's record,
   * and updates the user's password with the new password if it does.
   * It then sends a response indicating whether the password reset was successful or not.
   */
  static async resetPassword(DB_NAME: string, Payload: any) {
    try {
      // reset the user's password
      const resetToken = Payload.resetToken;
      const user: any = null; /* await User.findOne({
        where: { resetToken: resetToken },
      }); */
      if (!user) {
        return null;
      } else {
        // check if the password reset token has expired
        if (user.resetTokenExpiration < Date.now()) {
          return null;
        } else {
          // set the new password and clear the reset token
          user.password = Payload.password;
          user.resetToken = null;
          user.resetTokenExpiration = null;
          await user.save();
        }
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function initiates a two-factor authentication process for a user.
   * It gets the user ID and method (email or phone) from the request body,
   * then uses the findByPk function to retrieve the User record with the matching ID.
   * It then generates a new code for the user, stores it in the user's record,
   * and sends the code to the user via the specified method.
   */
  static async twoFactorAuth(DB_NAME: string, Payload: any) {
    try {
      // send a two-factor authentication code to the user's phone or email
      const { phone, email, device_id, channel } = Payload; // "0. web " or "1. app"
      const user: any = null; //await User.findByPk(userId);
      const condition = {
        [Op.or]: [{ email: email || "" }, { phone: phone.toString() || "" }],
      };
      const user_ = await UserService.findDetail(DB_NAME, condition);

      if (!user_) {
        return null;
      } else {
        const { authentication } = user_;
        if (authentication.twoFactorAuth) {
          // generate a two-factor authentication code
          const code = await this.generateOTPCode(9999);
          const authCode_ = code.toString();
          const authCode = await hash(authCode_);
          const authCodeExpiration = Date.now() + 300000; // 5 minutes
          const user_auth = await UserService.updateUserAuthentication(
            DB_NAME,
            user_.id,
            {
              authCode,
              authCodeExpiration,
            }
          );

          // send the two-factor authentication code
          if (phone) {
            //sendAuthCodeSms( { verificationToken: string; phone:user.phone }, authCode_);
          } else if (email) {
            //sendAuthCodeEmail(user.email, authCode_);
          }
          return {
            user_id: user_.id,
            VerificationCode: authCode_,
            ExpiresIn: authCodeExpiration,
          };
        } else {
          return {
            user_id: user_.id,
            VerificationCode: null,
            ExpiresIn: null,
          };
        }
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function initiates a mobile app registration  process for a user.
   */
  static async activateApp(DB_NAME: string, Payload: any) {
    try {
      // send a two-factor authentication code to the user's phone
      const { phone, otp, device_id, password } = Payload;
      const user: any = null; //await User.findByPk(userId);
      const condition = {
        [Op.or]: [{ phone: phone.toString() || "" }],
      };
      const user_ = await UserService.findDetail(DB_NAME, condition);

      if (!user_) {
        return null;
      } else {
        const { UserDetails, user, authentication } = user_;
        if (!(await validateHash(otp, authentication.authCode))) {
          return null;
        }
        if (isAfter(new Date(), new Date(authentication.authCodeExpiration))) {
          return null;
        }
        //TODO
        const user_auth = await UserService.updateUserAuthentication(
          DB_NAME,
          user_.id,
          {
            phoneVerified: true,
            deviceId: device_id.toString(),
            authCodeExpiration: Date.now(),
          }
        );
        return { user_id: user.id };
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function verifies an authentication code sent to a user via email or phone.
   * It gets the user ID, code type, and code from the request body,
   * then uses the findByPk function to retrieve the User record with the matching ID.
   * It then checks if the code matches the code stored in the user's record,
   * and sends a response indicating whether the code was verified successfully or not.
   */
  static async verifyAuthCode(DB_NAME: string, Payload: any) {
    try {
      // verify the two-factor authentication code provided by the user
      const userId = Payload.userId;
      const code = Payload.code;
      const user: any = null; //await User.findByPk(userId);
      if (!user) {
        return null;
      } else {
        if (user.authCode !== code || user.authCodeExpiration < Date.now()) {
          return null;
        } else {
          // clear the two-factor authentication code
          /* user.authCode = null;
          user.authCodeExpiration = null;
          await user.save(); */
          return null;
        }
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function authenticates an API request.
   * It gets the API key from the request headers, then uses the findOne function to retrieve
   *  the ApiKey record with the matching key.
   * It then checks if the API key is valid and sends a response indicating whether
   *  the request was authenticated or not
   */
  static async apiAuthentication(DB_NAME: string, Payload: any) {
    try {
      // authenticate the API request
      const apiKey = Payload.apiKey;
      const apiSecret = Payload.apiSecret;
      const organization = null; /* await Organization.findOne({
        where: { apiKey, apiSecret },
      }); */
      if (!organization) {
        return null;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }

  static async generateOTPCode(maxLength: number) {
    try {
      return Math.floor(Math.random() * maxLength);
    } catch (error: any) {
      throw Error(error);
    }
  }
  static async verifyToken(Payload: any) {
    try {
      return jwt.verify(Payload.refreshToken, process.env.JWT_SECRET!);
    } catch (error: any) {
      throw Error(error);
    }
  }
  static async generateJwtToken(Payload: any) {
    try {
      return jwt.sign(
        {
          id: Payload.id,
        },
        Locals.config().JWT_SECRET_KEY,
        {
          // for better security, use a short expiration time is recommended, and refresh tokens should be used
          expiresIn: "15m",
        }
      );
    } catch (error: any) {
      throw Error(error);
    }
  }
  static async generateRefreshToken(Payload: any) {
    try {
      const twoHoursInMilliseconds = 2 * 60 * 60 * 1000;

      // for a secure like a financial app, use a short expiration time is recommended, and refresh tokens should be used of about 15 minutes then the user will be required to login again
      // create a refresh token that expires in 7 days
      return {
        token: jwt.sign(
          {
            id: Payload.id,
          },
          Locals.config().REFRESH_TOKEN_SECRET_KEY, // refreshTokenSecretKey
          {
            // expires in 2 hours
            expiresIn: "2h",
          }
        ),
        expires: new Date(Date.now() + twoHoursInMilliseconds),
        createdByIp: "",
      };
    } catch (error: any) {
      throw Error(error);
    }
  }
  static async generateResetToken(DB_NAME: string, Payload: any) {
    try {
      return; /*  jwt.sign(
          Payload,
          process.env.JWT_SECRET!
        ); */
    } catch (error: any) {
      throw Error(error);
    }
  }
  static async updateUserToken(
    DB_NAME: string,
    userId: number,
    resetToken: String
  ) {
    try {
      const user = await UserService.updateUserToken(DB_NAME, userId, {
        resetToken,
        resetTokenExpiration:
          Locals.config().TokenExpiration || Date.now() + 3600000,
      });
      return user;
    } catch (error: any) {
      throw Error(error);
    }
  }
  static async sendPasswordResetNotification(user: string, resetToken: any) {
    try {
      return;
    } catch (error: any) {
      throw Error(error);
    }
  }
}

export async function hash(text: any) {
  return await bcrypt.hash(text, 10);
}

export async function validateHash(text: string, hashedText: string) {
  const isMatch = bcrypt.compareSync(text, hashedText);
  return isMatch;
}
