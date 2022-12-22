const dotenv = require("dotenv");
dotenv.config();
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER;
const dbPort = process.env.DB_PORT;
const timezone = process.env.TIMEZONE;
const dbPassword = process.env.DB_PASSWORD;
const db = {
  dialect: dbDriver,
  //timezone: timezone,
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
module.exports = db;
