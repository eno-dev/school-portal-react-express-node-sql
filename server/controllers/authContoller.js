const { connection } = require('../config/db');
const jwt = require('jsonwebtoken')
const { generateAccessToken } = require('../controllers/refreshTokenController')
const { generateRefreshToken } = require('../controllers/refreshTokenController')

// Refresh token array 
let refreshTokens = [];

// Refreshes token
const refreshToken = (req, res) => {
    //take the refresh token from the user
    const refreshToken = req.body.token;
    console.log(refreshToken)
    //send error if there is no token or it's invalid
    if (!refreshToken) return res.status(401).json("You are not authenticated!");
    if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json("Refresh token is not valid!");
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        err && console.log(err);
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        refreshTokens.push(newRefreshToken);

        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        });
    });

    //if everything is ok, create new access token, refresh token and send to user
};

// Sends login information to database
const postLogin = (req, res) => {
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
                    req.session.user = result;
                    const accessToken = generateAccessToken(user);
                    const refreshToken = generateRefreshToken(user);
                    refreshTokens.push(refreshToken);

                    // Creates Secure Cookie with refresh token
                    // res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

                    res.json({
                        user,
                        accessToken,
                        refreshToken,
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
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter(token => token !== refreshToken);
    // res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.status(200).json("You logged out successfully!")
}

module.exports = {
    refreshToken,
    postLogin,
    logOut
}