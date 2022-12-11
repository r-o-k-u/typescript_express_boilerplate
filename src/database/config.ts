import Locals from "../providers/Locals";
const dbName = Locals.config().DB_NAME as string;
const dbUser = Locals.config().DB_USER as string;
const dbHost = Locals.config().DB_HOST;
const dbDriver = Locals.config().DB_DRIVER;
const dbPort = Locals.config().DB_PORT;
const timezone = Locals.config().TIMEZONE;
const dbPassword = Locals.config().DB_PASSWORD;
const db = {
  dialect: dbDriver,
  timezone: timezone,
  username: dbUser,
  password: dbPassword,
  database: dbName,
  host: dbHost,
  port: Number(dbPort),
  logging: false /* 
  define: {
    paranoid: true,
  }, */,
};
console.log("defaultConfig", db);
export default db;
