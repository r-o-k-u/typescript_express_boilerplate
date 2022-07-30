import { Dialect, Sequelize } from "sequelize";
import Locals from "../providers/Locals";
const dbName = Locals.config().dbName as string;
const dbUser = Locals.config().dbUser as string;
const dbHost = Locals.config().dbHost;
const dbDriver = Locals.config().dbDriver as Dialect;
const dbPassword = Locals.config().dbPassword;

import Log from "../utils/Log";

class Database {
  /**
   * Create the express object
   */
  public sequelize: any;

  /**
   * Initializes the express server
   */
  constructor() {
    this.sequelize = new Sequelize(dbName, dbUser, dbPassword, {
      host: dbHost,
      dialect: dbDriver,
    });
  }
  // Loads the Database Pool
  public async init(): Promise<void> {
    Log.info("Database :: Booting @ Master...");
    console.log("h");
    try {
      await this.sequelize
        .authenticate()
        .then(() => {
          Log.info("Database :: connected...");
        })
        .catch((err: Error) => {
          Log.info(`Database error:: ${err.message}`);
          process.exit(1);
        });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}

export default new Database();
