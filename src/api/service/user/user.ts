import { IUserRepository } from "./userRepository";
import { User } from "../../../database/entity/User";
import { UserDetails } from "../../../database/entity/UserDetails";
import db from "../../../database/index";
import bcrypt from "bcrypt";
import Jwt from "../../../utils/Jwt";
import { addMinutes } from "date-fns";
import Locals from "../../../providers/Locals";
import TokenService from "../../service/auth/Token";
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
      const userData = await db.database.manager.find(UserDetails);
      return userData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  /**
   * Get all users
   * @returns
   */
  async find(
    email?: String,
    phone?: String
  ): Promise<User[] | Error | null | any> {
    // Get users from database
    try {
      const userData = await db.database.manager
        .getRepository(UserDetails)
        .createQueryBuilder("UserDetails")
        .leftJoinAndSelect("UserDetails.user", "user")
        //.innerJoinAndSelect("User")
        .where(
          "UserDetails.email = :email OR UserDetails.phone_number = :phone_number",
          {
            email: email,
            phone_number: phone,
          }
        )
        .getOne();
      return userData;
    } catch (error: any) {
      console.log("err", error);
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
          userDetails.user = user.id?.toString();
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
          let otp = Math.floor(Math.random() * 10000).toString();
          let otp_hash = Jwt.signConfirmCodeToken(user.id, otp);
          const expiry = addMinutes(
            new Date(),
            parseInt(Locals.config().jwt_verify_email_expiration_minutes)
          );
          const new_token = await TokenService.saveToken(
            otp_hash,
            expiry,
            user.id,
            "OTP"
          );
          userData.otp = otp;
          userData.otp_hash = otp_hash;
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
  async update(id: any, data: any): Promise<User | Error | null> {
    try {
      console.log("id", id, data);

      const userData = await db.database.manager.update(User, id, data);
      return userData;
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
