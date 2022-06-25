const { connection } = require('../config/db');
const jwt = require('jsonwebtoken')
const jwtDecode = require('jwt-decode');
const { generateAccessToken, generateRefreshToken, saveRefreshToken } = require('../controllers/refreshTokenController')

// Sends login information to database
const postLogin = async (req, res, next) => {
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

    try {
        connection.query(sqlQuery, [username], (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            // Checks that the result exists
            if (result.length > 0) {
                if (password === result[0].password) {
                    const user = JSON.parse(JSON.stringify(result[0]))
                    const accessToken = generateAccessToken(user);
                    const refreshToken = generateRefreshToken(user);

                    // Create array of current user to include the refreshToken 
                    // saving current refresh token with user
                    const currentUser = { ...user, refreshToken };
                    // Save refresh token to database
                    saveRefreshToken(refreshToken, user);
                    // Creates Secure Cookie with refresh token
                    res.cookie('jwt', refreshToken, {
                        httpOnly: true,
                        secure: true,
                        // secure: process.env.NODE_ENV === "production",
                        sameSite: 'None',
                        maxAge: 24 * 60 * 60 * 1000
                    });
                    // Send user and accessToken
                    res.json({
                        user,
                        accessToken
                    });
                } else {
                    res.send({ message: "Wrong username/password combination!" });
                }

            } else {
                res.send({ message: "User doesn't exist" });
            }
        }
        );
    } catch (e) {
        next(e)
    }

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