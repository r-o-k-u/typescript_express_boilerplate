const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
module.exports = {
  dialect: dotenv.config().parsed.DB_DRIVER,
  /*  timezone: '+03:00', */
  username: dotenv.config().parsed.DB_USER,
  password: dotenv.config().parsed.DB_PASSWORD,
  database: dotenv.config().parsed.DB_NAME,
  host: dotenv.config().parsed.DB_HOST,
  port: Number(dotenv.config().parsed.DB_PORT) /* 
  define: {
    paranoid: true,
  }, */,
};
