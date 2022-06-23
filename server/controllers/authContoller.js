const { connection } = require('../config/db');
const jwt = require('jsonwebtoken')
const { generateAccessToken } = require('../controllers/refreshTokenController')
const { generateRefreshToken } = require('../controllers/refreshTokenController')

// Sends login information to database
const postLogin = (req, res) => {
    // get the cookies from the request
    const cookies = req.cookies;
    // variable passed from frontend form
    const username = req.body.username;
    // variable passed from frontend form
    const password = req.body.password;

    let sqlQuery =
        `SELECT * 
            FROM user u
            LEFT JOIN role r 
            ON u.role_id = r.role_id
            WHERE user_name = ?;`

    connection.query(
        sqlQuery, [username],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                if (password === result[0].password) {
                    const user = JSON.parse(JSON.stringify(result[0]))
                    const accessToken = generateAccessToken(user);
                    const refreshToken = generateRefreshToken(user);
                    // Create array of current user to include the refreshToken 
                    // saving current refresh token with user
                    const currentUser = { ...user, refreshToken };

                    // Creates Secure Cookie with refresh token
                    res.cookie('jwt', refreshToken, {
                        httpOnly: true,
                        secure: true,
                        // secure: process.env.NODE_ENV === "production",
                        sameSite: 'None',
                        maxAge: 24 * 60 * 60 * 1000
                    });

                    res.json({
                        user,
                        accessToken,
                        // refreshToken
                    });
                } else {
                    res.send({ message: "Wrong username/password combination!" });
                }

            } else {
                res.send({ message: "User doesn't exist" });
            }
        }
    );
};

// Log-out function 
const logOut = (req, res) => {
    return res
        .clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
        .status(200).json("You logged out successfully!")
}

module.exports = {
    // refreshToken,
    postLogin,
    logOut
}