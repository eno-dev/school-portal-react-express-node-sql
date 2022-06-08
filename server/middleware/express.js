const bodyParser = require('body-parser');
const cors = require('cors');
const session = require("express-session");
const path = require('path');
const express = require('express');
const corsOptions = require('../config/corsOptions')
const { connection } = require('../config/db');
const MySQLStore = require('express-mysql-session')(session);

module.exports = app => {

    // Store all the sessions
    let sessionStore = new MySQLStore({
        createDatabaseTable: true,
        schema: {
            tableName: 'sessiontb1',
            columnNames: {
                session_id: 'session_id',
                expires: 'expires',
                data: 'data'
            }
        }
    }, connection)

    app.use(cors(corsOptions))
    app.use(session({
        secret: 'secret',
        path: '/',
        httpOnly: true,
        store: sessionStore,
        secure: false,
        cookie: {
            sameSite: 'strict',
            maxAge: 30000
        },
        resave: true,
        saveUninitialized: true
    }));

    // Json body parser
    app.use(bodyParser.json());

    // JSON
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
}