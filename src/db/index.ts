import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/User";
import Locals from "../providers/Locals";
const dbName = Locals.config().dbName as string;
const dbUser = Locals.config().dbUser as string;
const dbHost = Locals.config().dbHost;
const dbDriver = Locals.config().dbDriver;
const dbPassword = Locals.config().dbPassword;

import Log from "../utils/Log";
console.log(__dirname, "..");

/**
 * This class instantiates all database.
 *
 * @param
 * @returns
 *
 * @internal
 */
class Database {
  /**
   * Create the express object
   */
  public database: any;

  /**
   * Initializes the express server
   */
  constructor() {
    this.database = new DataSource({
      type: dbDriver,
      host: dbHost,
      port: 5432,
      username: dbUser,
      password: dbPassword,
      database: dbName,
      synchronize: true,
      logging: false,
      entities: [`${__dirname}/models/*.ts`],
      migrations: [`${__dirname}/migrations/*.ts`],
      subscribers: [],
    });
  }
  // Loads the Database Pool
  public async init(): Promise<void> {
    Log.info("Database :: Booting @ Master...");
    try {
      await this.database
        .initialize()

        .then(async () => {
          this.database.synchronize();
          Log.info("Database :: connected...");
        })
        .catch((error: Error) => {
          Log.error(`Database error:: ${error.message}`);
          process.exit(1);
        });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}

export default new Database();
