const bodyParser = require('body-parser');
const cors = require('cors');
const session = require("express-session");
const path = require('path');
const express = require('express');
const corsOptions = require('../config/corsOptions')
const { connection } = require('../config/db');
const MySQLStore = require('express-mysql-session')(session);

module.exports = app => {

    app.use(cors(corsOptions))

    // Json body parser
    app.use(bodyParser.json());

    // JSON
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
}