const mysql = require('mysql2');
require('dotenv').config();

const database = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  debug: false,
  connectionLimit: process.env.DB_LIMIT
});

console.log("Vilicom is Online!");
module.exports = { database };