import Handler from "../utils/Handler";
import Repo from "../database/models/index";
import { hash } from "./authService";
/**
 * User Service
 * @remarks
 * Handles all user requests.
 */
/**
 * User Service
 * @remarks
 * This class is responsible for managing users in the system.
 * It includes functions for creating new users, fetching users,
 * deleting users, and managing user profiles. It also includes functions for managing user groups and roles.
 */
export class UserService {
  /**
   * This function retrieves a list of all users. It gets the tenant ID from the request object, then uses the findAll function to retrieve the User records with the matching tenant ID. It then sends the list of users as the response.
   * @param req
   * @param res
   */
  static async getAll(DB_NAME: string) {
    try {
      // retrieve all users
      const users = {}; // await User.findAll();
      if (users) {
        return null;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function retrieves a single user by ID. It gets the user ID from the request parameters,
   * then uses the findByPk function to retrieve
   * the User record with the matching ID. It then sends the user as the response.
   * @param req
   * @param res
   */
  static async getById(DB_NAME: string, Id: number) {
    try {
      // retrieve a single user by id
      const user = {}; // await User.findByPk(req.params.id);
      if (user) {
        return null;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
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
  static async create(DB_NAME: string, Payload: any) {
    const t = await Repo.sequelize.transaction();
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        phone,
        tenantId,
        username,
        referral_code,
      } = Payload;
      // create a new user
      const refereed = referral_code ? true : false;
      const username_ = username ? username : email;
      const type = 0;
      const language_id = 0;
      const registrationStatus = 1;
      const accountStatus = 0;
      const email_notification_status = 0;
      const phone_notification_status = 0;
      const passwordHash = await hash(password);
      const code = `USR_${Math.floor(
        10000 + Math.random() * 90000
      ).toString()}`;
      const user = await Repo[DB_NAME].User.create(
        {
          user_code: code,
          tenantId,
          firstName,
          lastName,
          username: username_,
          refereed,
          language_id,
          registrationStatus,
          accountStatus,
          referral_code,
          type,
          email_notification_status,
          phone_notification_status,
          status: 1, //active
        },
        {
          transaction: t,
        }
      );
      const user_details = await Repo[DB_NAME].UserDetail.create(
        {
          tenantId,
          userId: user.id,
          email,
          phone,
          status: 1,
        },
        {
          transaction: t,
        }
      );

      const user_auth = await Repo[DB_NAME].UserAuthentication.create(
        {
          tenantId,
          userId: user.id,
          passwordHash,
        },
        {
          transaction: t,
        }
      );
      // If the execution reaches this line, no errors were thrown.
      // We commit the transaction.
      await t.commit();
      return { user, user_details, user_auth };
    } catch (error: any) {
      // If the execution reaches this line, an error was thrown.
      // We rollback the transaction.
      await t.rollback();
      throw Error(error);
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
  static async update(DB_NAME: string, Id: number, Update: any) {
    try {
      // update an existing user
      const user = {}; // await User.findByPk(req.params.id);
      //user.update(req.body);
      return null;
    } catch (error: any) {
      throw Error(error);
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
  static async delete(DB_NAME: string, Id: number) {
    try {
      // delete an existing user
      const user = {}; // await User.findByPk(req.params.id);
      //user.destroy();
      return null;
    } catch (error: any) {
      throw Error(error);
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
  static async getProfile(DB_NAME: string, UserId: number) {
    try {
      // get the user's profile
      const userId = null; //req.user!.id;
      const user = {}; /*  await User.findByPk(userId, {
        include: [{ model: UserDetail }],
      }); */
      if (user) {
        return null;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
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
  static async updateProfile(DB_NAME: string, UserId: number, Update: any) {
    try {
      // update the user's profile
      /* const userId = null; // req.user!.id;
      const { firstName, lastName, email, phone } = req.body;
      const user: any = null; //await User.findByPk(userId);
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.phone = phone;
      await user.save(); */
      return null;
    } catch (error: any) {
      throw Error(error);
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
  static async updateUserToken(DB_NAME: string, Id: number, Update: any) {
    try {
      // update an existing user
      const user = {}; // await User.findByPk(req.params.id);
      //user.update(req.body);
      return null;
    } catch (error: any) {
      throw Error(error);
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
  static async updatePassword(DB_NAME: string, Id: number, Update: any) {
    try {
      // update an existing user
      const user = {}; // await User.findByPk(req.params.id);
      //user.update(req.body);
      return null;
    } catch (error: any) {
      throw Error(error);
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
  async addUserToGroup(DB_NAME: string, UserId: number, groupID: number) {
    // Get user ID and user group ID from request parameters
    //const { userId, groupId } = req.params;

    // Insert new UserGroup record into database with matching user ID and user group ID
    const userGroup: any = {}; /* await UserGroup.create({
      userId: userId,
      groupId: groupId,
    }); */

    // Send response indicating that user was added to group successfully
    return null;
  }
  /**
   * This function removes a user from a user group.
   * It gets the user ID and user group ID from the request parameters,
   * then uses the destroy function to delete the UserGroup record with the matching user ID and user group ID.
   * It then sends a response indicating that the user was removed from the group successfully.
   * @param req
   * @param res
   */
  async removeUserFromGroup(DB_NAME: string, UserId: number, groupID: number) {
    // Get user ID and user group ID from request parameters
    //const { userId, groupId } = req.params;

    // Delete UserGroup record with matching user ID and user group ID
    /*  await UserGroup.destroy({
      where: {
        userId: userId,
        groupId: groupId,
      },
    }); */

    // Send response indicating that user was removed from group successfully
    return null;
  }
  /**
   * This function retrieves a list of user groups that a user belongs to.
   *  It gets the user ID from the request parameters,
   * then uses the findAll function with a join clause to retrieve the UserGroup
   * records with the matching user ID. It then sends the list of user groups as the response.
   * @param req
   * @param res
   */
  static async getGroups(DB_NAME: string, UserId: number) {
    try {
      // get the user's groups
      /* const userId = req.user!.id;
      const user = await User.findByPk(userId, {
        include: [{ model: UserGroup, include: [{ model: AuthGroup }] }],
      }); */
      const groups = null; // user.UserGroups.map((group) => group.AuthGroup);
      if (groups) {
        return null;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
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
  static async updateGroups(DB_NAME: string, UserId: number, Update: any) {
    try {
      // update the user's groups
      const userId = null; //req.user!.id;
      // const groupIds = req.body.groupIds;
      /* await UserGroup.destroy({ where: { userId } });
      const groups = groupIds.map((groupId) => ({ userId, groupId }));
      await UserGroup.bulkCreate(groups); */
      return null;
    } catch (error: any) {
      throw Error(error);
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
  async getRoles(DB_NAME: string, UserId: number) {
    // Get user ID from request parameters
    //const { id } = req.params;

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
      return null;
    } else {
      return null;
    }
  }
}

export default {
  UserService,
};
