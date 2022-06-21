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
    connection.connect()
    // CLEAR DB
    // connection = mysql.createPool({
    //     host: 'us-cdbr-east-05.cleardb.net',
    //     user: 'b6c384b4e5adfd',
    //     password: 'a101d1fe',
    //     database: 'heroku_bea33a38296057c',
    //     multipleStatements: true
    // mysql:/b6c384b4e5adfd:a101d1fe@us-cdbr-east-05.cleardb.net/heroku_bea33a38296057c?reconnect=true

    // });
    console.log(connection)
}

module.exports = {
    connection
}