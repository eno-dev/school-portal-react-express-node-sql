const express = require('express');
const router = express.Router();
const { connection } = require('../config/db')

const getAllUsers = (req, res) => {
    // Query database
    let query = `CALL sp_view_students; CALL sp_view_teachers; CALL sp_view_admin; CALL sp_view_users;`

    // Connection to database with query and information stored in rows
    connection.query(query, (err, rows, fields) => {

        // When done with the connection, release it
        if (!err) {
            let student = JSON.parse(JSON.stringify(rows[0]))
            let teacher = JSON.parse(JSON.stringify(rows[2]))
            let admin = JSON.parse(JSON.stringify(rows[4]))
            let user = JSON.parse(JSON.stringify(rows[6]))

            res.send(user)
            let removedUser = req.query.removed;
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
};

const getTeachers = (req, res) => {
    // Query database
    let query = `CALL sp_view_students; CALL sp_view_teachers; CALL sp_view_admin; CALL sp_view_users;`

    // Connection to database with query and information stored in rows
    connection.query(query, (err, rows, fields) => {

        // When done with the connection, release it
        if (!err) {
            let student = JSON.parse(JSON.stringify(rows[0]))
            let teacher = JSON.parse(JSON.stringify(rows[2]))
            let admin = JSON.parse(JSON.stringify(rows[4]))
            let user = JSON.parse(JSON.stringify(rows[6]))
            res.send(teacher)
            let removedUser = req.query.removed;

        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
};

module.exports = {
    getAllUsers,
    getTeachers
}