import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize-typescript";
import Locals from "../providers/Locals";
const modelsDir = path.resolve(__dirname + "/models");
import Logger from "../utils/Log";
const Log = new Logger();

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
  public sequelize: Sequelize;

  /**
   * Initializes the express server
   */
  constructor() {
    this.database = {};
  }
  // Loads the Database Pool
  public async init(): Promise<void> {
    Log.info("Database :: Booting @ Master...");
    try {
      this.sequelize = new Sequelize(
        Locals.config().DB_NAME,
        Locals.config().DB_USER,
        Locals.config().DB_PASSWORD,
        {
          dialect: Locals.config().DB_DRIVER,
          port: Locals.config().DB_PORT,
        }
      );
      this.sequelize
        .authenticate()
        .then(() => {
          console.log("DB connected");
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

  public async addSequelizeConnectionToRepo(
    dbRepo: any,
    dbkey: string
  ): Promise<void> {
    /* const database = {};
    console.log("addSequelizeConnectionToRepo", dbkey);
    let sequelize;
    if (dbkey === db.database) {
      sequelize = new Sequelize(db.database, db.username, db.password, db);
    } else {
      sequelize = new Sequelize(dbkey, db.username, db.password, db);
    }
    if (!dbRepo[dbkey]) {
      try {
      } catch (err) {}
    } */
  }
}

export default new Database();
