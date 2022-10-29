import { IUserRepository } from "./userRepository";
import { User } from "../../../database/entity/User";
import { UserDetails } from "../../../database/entity/UserDetails";
import db from "../../../database/index";
import bcrypt from "bcrypt";
export interface IUser {
  user: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  date_of_birth: Date;
  email: string;
  id_number: number;
  phone_number: string;
  address1: string;
  address2: string;
  gender: string;
  password: string;
  id_pic_front: string;
  id_pic_back: string;
  passport_pic: string;
}
class UserService implements IUserRepository {
  /**
   * Get all users
   * @returns
   */
  async get(): Promise<User[] | Error | null> {
    // Get users from database
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  /**
   * Get user by id
   * @returns
   */
  async getById(id: number): Promise<User | Error | null> {
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  /**
   * Add a user
   * @returns
   */
  async add(model: UserDetails): Promise<User | Error | null> {
    try {
      const {
        first_name,
        middle_name,
        last_name,
        date_of_birth,
        email,
        id_number,
        phone_number,
        address1,
        address2,
        gender,
        password,
        id_pic_front,
        id_pic_back,
        passport_pic,
      } = model;
      const user = new User();
      (user.status = 0), (user.accept_terms = false), (user.verified = false);

      const userDetails = new UserDetails();

      const rawData = await db.database.manager.transaction(
        async (transactionalEntityManager: any) => {
          const userInfo = await transactionalEntityManager.save(user);
          userDetails.user = user.id;
          userDetails.first_name = first_name;
          userDetails.middle_name = middle_name;
          userDetails.last_name = last_name;
          userDetails.date_of_birth = date_of_birth;
          userDetails.phone_number = phone_number?.toString();
          userDetails.email = email;
          userDetails.id_number = id_number;
          userDetails.address1 = address1;
          userDetails.address2 = address2;
          userDetails.gender = gender;
          userDetails.password = await UserService.hash(password);
          userDetails.id_pic_front = id_pic_front;
          userDetails.id_pic_back = id_pic_back;
          userDetails.passport_pic = passport_pic;
          const userData = await transactionalEntityManager.save(userDetails);
          return userData;
        }
      );
      return rawData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  /**
   * Update a user
   * @returns
   */
  async update(model: any): Promise<User | Error | null> {
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  /**
   * Delete a user
   * @returns
   */
  async delete(id: number): Promise<User | Error | null> {
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  /**
   * Get user details
   * @returns
   */
  async getDetails(): Promise<User[] | Error | null> {
    // Get users from database
    try {
      return [];
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  /**
   * Add user details
   * @returns
   */
  async addDetails(model: UserDetails): Promise<UserDetails | Error | null> {
    const {
      user,
      first_name,
      middle_name,
      last_name,
      date_of_birth,
      email,
      id_number,
      phone_number,
      address1,
      address2,
      gender,
      password,
      id_pic_front,
      id_pic_back,
      passport_pic,
    } = model;
    const userDetails = new UserDetails();
    userDetails.user = user;
    userDetails.first_name = first_name;
    userDetails.middle_name = middle_name;
    userDetails.last_name = last_name;
    userDetails.date_of_birth = date_of_birth;
    userDetails.phone_number = phone_number?.toString();
    userDetails.email = email;
    userDetails.id_number = id_number;
    userDetails.address1 = address1;
    userDetails.address2 = address2;
    userDetails.gender = gender;
    userDetails.password = password;
    userDetails.id_pic_front = id_pic_front;
    userDetails.id_pic_back = id_pic_back;
    userDetails.passport_pic = passport_pic;

    try {
      const rawData = await db.database.manager.save(userDetails);
      console.log("raw data", rawData);
      return rawData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  /**
   * Delete user details
   * @returns
   */
  async deleteDetails(id: number): Promise<User | Error | null> {
    try {
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  private static async hash(password: any) {
    return await bcrypt.hash(password, 10);
  }
}

export default UserService;
