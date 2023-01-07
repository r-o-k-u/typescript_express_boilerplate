import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import Locals from "../providers/Locals";
const modelsDir = path.resolve(__dirname + "/models");
import Logger from "../providers/Log";
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
  sequelize: Sequelize;
  repo: any;
  Sequelize: Sequelize;

  /**
   * Initializes the express server
   */
  constructor() {
    this.repo = {};
    this.sequelize = new Sequelize(
      Locals.config().DB_NAME,
      Locals.config().DB_USER || "",
      Locals.config().DB_PASSWORD || "",
      {
        host: Locals.config().DB_HOST || "",
        dialect: Locals.config().DB_DRIVER || "",
        port: Locals.config().DB_PORT || "",
        logging: false, //(msg) => console.log(msg),
      }
    );
    this.sequelize.sync();
  }

  async associate() {}

  async seed() {}

  public async addSequelizeConnectionToRepo(DB_REPO: any, DB_NAME: any) {
    if (DB_NAME != Locals.config().DB_NAME) {
      this.sequelize = new Sequelize(
        DB_NAME || "",
        Locals.config().DB_USER || "",
        Locals.config().DB_PASSWORD || "",
        {
          host: Locals.config().DB_HOST || "",
          dialect: Locals.config().DB_DRIVER || "",
          port: Locals.config().DB_PORT || "",
          logging: false, //(msg) => console.log(msg),
        }
      );
    }
    if (!DB_REPO[DB_NAME]) {
      try {
        await this.sequelize.authenticate();
        await this.sequelize.sync();
        console.log("Connection has been established successfully.");
        fs.readdirSync(modelsDir)
          .filter((file) => {
            return (
              file.indexOf(".") !== 0 &&
              file !== "index.ts" &&
              file.slice(-3) === ".ts"
            );
          })
          .forEach((file) => {
            const model = require(path.join(modelsDir, file))(
              this.sequelize,
              DataTypes
            );
            this.repo[model.name] = model;
          });

        Object.keys(this.repo).forEach((modelName) => {
          if (this.repo[modelName].associate) {
            this.repo[modelName].associate(this.repo);
          }
        });
        await this.sequelize.sync();
        DB_REPO[DB_NAME] = this.repo;
        DB_REPO.sequelize = this.sequelize;
        DB_REPO.Sequelize = this.Sequelize;
        // console.log("dbRepo", dbRepo);
        return DB_REPO;
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
    } else {
      DB_REPO.sequelize = this.sequelize;
      DB_REPO.Sequelize = this.Sequelize;
      return DB_REPO;
      console.log("tenant already connected  ");
    }
  }
}

export default new Database();
