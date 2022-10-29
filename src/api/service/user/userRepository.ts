import { User } from "../../../database/entity/User";
import { UserDetails } from "../../../database/entity/UserDetails";

export interface IUserRepository {
  get(): Promise<User[] | Error | null>;
  getById(id: number): Promise<User | Error | null>;
  add(user: UserDetails): Promise<User | Error | null>;
  delete(id: number): Promise<User | Error | null>;
  getDetails(): Promise<User[] | Error | null>;
  addDetails(details: UserDetails): Promise<UserDetails | Error | null>;
  deleteDetails(id: number): Promise<User | Error | null>;
}
