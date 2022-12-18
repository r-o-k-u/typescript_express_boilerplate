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
  public repo: any;
  sequelize: Sequelize;

  /**
   * Initializes the express server
   */
  constructor(DB_NAME: string) {
    this.repo = {};
    this.sequelize = new Sequelize(
      DB_NAME || "",
      Locals.config().DB_USER || "",
      Locals.config().DB_PASSWORD || "",
      {
        host: Locals.config().DB_HOST || "",
        dialect: Locals.config().DB_DRIVER || "",
        port: Locals.config().DB_PORT || "",
      }
    );
  }

  async associate() {}

  async seed() {}
  async authenticate() {
    try {
      //Create associations
      await this.associate();

      //Sync DB
      await this.sequelize
        .sync({ force: false })
        .then(() => console.log("DB Connection established successfully."))
        .catch((err) =>
          console.error(`DB Sequelize Connection Failed: ${err}`)
        );
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
  async addSequelizeConnectionToRepo(DB_REPO: any, DB_NAME: any) {
    if (DB_NAME != Locals.config().DB_NAME) {
      this.sequelize = new Sequelize(
        DB_NAME || "",
        Locals.config().DB_USER || "",
        Locals.config().DB_PASSWORD || "",
        {
          host: Locals.config().DB_HOST || "",
          dialect: Locals.config().DB_DRIVER || "",
          port: Locals.config().DB_PORT || "",
        }
      );
    }
    if (!DB_REPO[DB_NAME]) {
      try {
        await this.sequelize.authenticate();
        console.log("Connection has been established successfully.");
        fs.readdirSync(modelsDir)
          .filter((file) => {
            return (
              file.indexOf(".") !== 0 &&
              file !== "index.js" &&
              file.slice(-3) === ".js"
            );
          })
          .forEach((file) => {
            const model = require(path.join(modelsDir, file));
            this.repo[model.name] = model;
          });

        Object.keys(this.repo).forEach((modelName) => {
          if (this.repo[modelName].associate) {
            this.repo[modelName].associate(this.repo);
          }
        });

        DB_REPO[DB_NAME] = this.repo;
        // console.log("dbRepo", dbRepo);
        return DB_REPO;
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
    } else {
      console.log("tenant already connected  ");
    }
  }
}

//export default Database;

export const getDBInstance = async (DB_NAME: string) => {
  const DB = new Database(DB_NAME);
  await DB.authenticate();
  //await DB.seed();
  return DB;
};
