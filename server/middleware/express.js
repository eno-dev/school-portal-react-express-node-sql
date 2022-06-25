const bodyParser = require('body-parser');
const cors = require('cors');
const session = require("express-session");
const express = require('express');
const cookieParser = require("cookie-parser");
const corsOptions = require('../config/corsOptions')

module.exports = app => {

    app.use(cors(corsOptions))
    app.use(cookieParser());
    // app.use(session({
    //     secret: 'secret',
    //     // Check for potential problem in the future
    //     // path: '/',
    //     httpOnly: true,
    //     secure: false,
    //     cookie: {
    //         sameSite: 'strict',
    //         maxAge: 30000
    //     },
    //     resave: true,
    //     saveUninitialized: true
    // }));
    // Json body parser
    app.use(bodyParser.json());
    // JSON
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
}