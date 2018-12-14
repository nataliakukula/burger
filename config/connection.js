const mysql = require("mysql");
require('dotenv').config();

//Connect the server to mySQL database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 8889,
    database: "burgers_db",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    socket: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;