const express = require('express');
// const router = express.Router();
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

// Get teacher
const getTeacher = (req, res) => {
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
                console.log(rows)
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
    getTeacher,
    updateUser,
    deleteUser
}