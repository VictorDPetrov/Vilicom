const mysql = require('mysql2');

const database = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'vilicom',
  port: 3306,
  debug: false,
  connectionLimit: 200
});

console.log("Vilicom is Online!");
module.exports = { database };