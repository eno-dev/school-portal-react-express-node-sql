const express = require('express');
const { connection } = require('../config/db')

// *****************************
//            CRUD
// *****************************
// -----------------------------
//            Create
// -----------------------------
const createUser = (req, res) => {
    user = req.body
    let query = `CALL sp_Create_User(?,?,?,?,?,?,?,?,?,?)`
    connection.query(query,
        [user.user_id,
        user.first_name,
        user.last_name,
        user.email,
        user.phone,
        user.comments,
        user.status,
        user.role_id,
        user.user_name,
        user.password,
        ],
        (err, rows, fields) => {
            if (!err) {
                res.send('User Successfully Added!')
            } else {
                res.send(err)
            }
        })
}
// -----------------------------
//            Read
// -----------------------------
const getUser = (req, res) => {
    // Query database
    let query = `CALL sp_view_teachers;`
    // Connection to database with query and information stored in rows
    connection.query(query, (err, rows, fields) => {
        // When done with the connection, release it
        if (!err) {
            let user = JSON.parse(JSON.stringify(rows[0]))
            res.send(user)
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
};
// Get user by ID
const getUserById = (req, res) => {
    const user = req.body
    // Query database
    let query = `CALL sp_View_User_By_Id(?)`

    // Connection to database with query and information stored in rows
    connection.query(query, [user.user_id], (err, rows, fields) => {

        // When done with the connection, release it
        if (!err) {
            let rowFix = JSON.parse(JSON.stringify(rows[0]))
            res.send(rowFix[0])
        } else {
            res.send(err);
        }
        // console.log('The data from user table: \n', rows);
    });
};

// Get user by Role
const getUserByRole = (req, res) => {
    const user = req.body
    // Query database
    let query = `CALL sp_View_User_By_Role(?)`
    // Connection to database with query and information stored in rows
    connection.query(query, [user.role_id], (err, rows, fields) => {
        // When done with the connection, release it
        if (!err) {
            let rowFix = JSON.parse(JSON.stringify(rows[0]))
            res.send(rowFix)
        } else {
            res.send(err);
        }
        // console.log('The data from user table: \n', rows);
    });
};

// Get teacher
const getTeacher = (req, res) => {
    // Query database
    let query = `CALL sp_view_teachers;`

    // Connection to database with query and information stored in rows
    connection.query(query, (err, rows, fields) => {

        // When done with the connection, release it
        if (!err) {
            let teacher = JSON.parse(JSON.stringify(rows[0]))
            res.send(teacher)
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
};
// -----------------------------
//            Update
// -----------------------------
// Update user
const updateUser = (req, res) => {
    const user = req.body;
    const query = `CALL sp_Update_User(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

    connection.query(query,
        [user.user_id,
        user.first_name,
        user.last_name,
        user.email,
        user.phone,
        user.comments,
        user.status,
        user.role_id,
        user.user_name,
        user.password,
        ],
        (err, rows, fields) => {

            if (!err) {
                res.send('Updates successfully')
            } else {
                res.send(err)
            }
        });
};

// -----------------------------
//            Delete
// -----------------------------
// Delete user
const deleteUser = (req, res) => {
    user = req.body
    let query = `CALL sp_Delete_User(?)`
    connection.query(query, [user.user_id], (err, rows, fields) => {
        if (!err) {
            res.send('User Deleted!')
        } else {
            res.send(err)
        }
    })
};

module.exports = {
    createUser,
    getUser,
    getUserById,
    getUserByRole,
    getTeacher,
    updateUser,
    deleteUser
}