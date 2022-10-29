const dotenv = require("dotenv");
const config = dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
module.exports = {
  dialect: config.parsed.DB_DRIVER,
  /*  timezone: '+03:00', */
  username: config.parsed.DB_USER,
  password: config.parsed.DB_PASSWORD,
  database: config.parsed.DB_NAME,
  host: config.parsed.DB_HOST,
  port: Number(config.parsed.DB_PORT) /* 
  define: {
    paranoid: true,
  }, */,
};
