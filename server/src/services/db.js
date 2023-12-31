require("dotenv").config();
const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DS_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

conn.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

module.exports = conn;
