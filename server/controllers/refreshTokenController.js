const jwt = require('jsonwebtoken')
const jwtDecode = require('jwt-decode');
const { connection } = require('../config/db');


const generateAccessToken = (decoded) => {
    return jwt.sign({
        id: decoded.user_id, role: decoded.role_name
    },
        process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "5s",
    });
};

const generateRefreshToken = (decoded) => {
    return jwt.sign({
        id: decoded.user_id, role: decoded.role_name
    },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' });
};

const saveRefreshToken = (refreshToken, user) => {
    // Decode the token
    let refreshDecoded = jwtDecode(refreshToken)
    let issuedAt = refreshDecoded.iat
    let expires = refreshDecoded.exp

    // Changing data format
    const issueDateTime = new Date(issuedAt * 1000).toISOString().slice(0, 19).replace('T', ' ');
    const expiryDateTime = new Date(expires * 1000).toISOString().slice(0, 19).replace('T', ' ');


    let sqlToken = `CALL sp_store_refresh_token(?,?,?,?)`
    // Store refresh token in the database
    connection.query(sqlToken, [user.user_id, refreshToken, issueDateTime, expiryDateTime], (err, result, fields) => {
        if (!err) {
            return result
        } else {
            return err
            // res.send({ result })
        }

    })
};

const checkRefreshToken = async (refreshToken) => {
    const query = `CALL sp_check_refresh_token(?)`
    try {
        connection.query(query, [refreshToken], (err, result) => {
            if (result[0].length === 0) {
                console.log('No refresh token in DB'); //Unauthorized
            } else {
                console.log('Refresh token is in database')
                deleteRefreshToken(refreshToken)
            }
        })
    } catch (e) {
        return (e)
    }
};

const deleteRefreshToken = (refreshToken) => {
    const query = `CALL sp_Delete_Refresh_Token(?)`

    connection.query(query, [refreshToken], (err, result) => {
        if (err) return err
        if (result) {
            console.log('Successfully Deleted Token')
        }
    })
}

const handleRefreshToken = (req, res) => {
    //take the refresh token from the user
    const cookies = req.cookies;
    // check if there is a cookie with a jwt property
    if (!cookies?.jwt) return res.status(401).json("You are not authenticated!");
    const refreshToken = cookies.jwt;

    const decodedRefreshToken = jwtDecode(refreshToken)

    // const foundUser = currentUser.find(user => user.refreshToken === refreshToken)
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    // Check if refresh token exists
    checkRefreshToken(refreshToken);
    // // Delete old refresh token
    // deleteRefreshToken(refreshToken);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        console.log(decoded)
        err && console.log(err);
        // refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
        const newAccessToken = generateAccessToken(decoded);
        const newRefreshToken = generateRefreshToken(decoded);

        console.log(jwtDecode(newRefreshToken))
        saveRefreshToken(newRefreshToken, newRefreshToken)

        res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

        res.status(200).json({
            accessToken: newAccessToken,
        });
    });
};

module.exports = {
    generateRefreshToken,
    generateAccessToken,
    handleRefreshToken,
    saveRefreshToken,
    deleteRefreshToken
}