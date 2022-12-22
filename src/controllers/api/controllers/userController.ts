/**
 * User controller
 * @remarks
 * Handles all user requests.
 */

import express from "express";

// define the User controller
class UserController {
  static async getAll(req: Express.Request, res: express.Response) {
    try {
      // retrieve all users
      const users = {}; // await User.findAll();
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getById(req: express.Request, res: express.Response) {
    try {
      // retrieve a single user by id
      const user = {}; // await User.findByPk(req.params.id);
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async create(req: express.Request, res: express.Response) {
    try {
      // create a new user
      const user = {}; // await User.create(req.body);
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async update(req: express.Request, res: express.Response) {
    try {
      // update an existing user
      const user = {}; // await User.findByPk(req.params.id);
      //user.update(req.body);
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async delete(req: express.Request, res: express.Response) {
    try {
      // delete an existing user
      const user = {}; // await User.findByPk(req.params.id);
      //user.destroy();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async getProfile(req: express.Request, res: express.Response) {
    try {
      // get the user's profile
      const userId = null; //req.user!.id;
      const user = {}; /*  await User.findByPk(userId, {
        include: [{ model: UserDetail }],
      }); */
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async updateProfile(req: express.Request, res: express.Response) {
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
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async deleteProfile(req: express.Request, res: express.Response) {
    try {
      // delete the user's profile
      const userId = null; //req.user!.id;
      const user = {}; //await User.findByPk(userId);
      //await user.destroy();
      res.send({ message: "Profile deleted successfully" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async getGroups(req: express.Request, res: express.Response) {
    try {
      // get the user's groups
      /* const userId = req.user!.id;
      const user = await User.findByPk(userId, {
        include: [{ model: UserGroup, include: [{ model: AuthGroup }] }],
      }); */
      const groups = null; // user.UserGroups.map((group) => group.AuthGroup);
      res.send(groups);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async updateGroups(req: express.Request, res: express.Response) {
    try {
      // update the user's groups
      const userId = null; //req.user!.id;
      const groupIds = req.body.groupIds;
      /* await UserGroup.destroy({ where: { userId } });
      const groups = groupIds.map((groupId) => ({ userId, groupId }));
      await UserGroup.bulkCreate(groups); */
      res.send({ message: "Groups updated successfully" });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getRoles(req: express.Request, res: express.Response) {
    try {
      // get the user's roles
      /* const userId = req.user!.id;
      const user = await User.findByPk(userId, {
        include: [{ model: AuthRole }],
      }); */
      const roles = null; //user.AuthRoles;
      res.send(roles);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
