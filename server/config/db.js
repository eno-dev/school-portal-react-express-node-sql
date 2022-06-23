require('dotenv').config();
const mysql = require('mysql');

let connection;

if (process.env.NODE_ENV !== "production") {
    connection = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        multipleStatements: true
    });
} else {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
    console.log("SharkDB")
}

module.exports = {
    connection
}