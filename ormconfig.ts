import Locals from "./src/providers/Locals";
const dbName = Locals.config().dbName as string;
const dbUser = Locals.config().dbUser as string;
const dbHost = Locals.config().dbHost;
const dbDriver = Locals.config().dbDriver;
const dbPassword = Locals.config().dbPassword;

module.exports = {
  type: dbDriver,
  host: dbHost,
  port: 5432,
  username: dbUser,
  password: dbPassword,
  database: dbName,
  synchronize: true,
  logging: false,
  entities: ["src/db/entity/**/*.ts"],
  migrations: ["src/database/migration/**/*.ts"],
  subscribers: ["src/database/subscriber/**/*.ts"],
};
