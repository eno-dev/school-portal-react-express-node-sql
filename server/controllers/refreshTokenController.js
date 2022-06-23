const jwt = require('jsonwebtoken')


const generateAccessToken = (user) => {
    return jwt.sign({
        user, id: user.user_name, role: user.role_name
    },
        process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "5s",
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({
        id: user.user_name, role: user.role_name
    },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' });
};

module.exports = {
    generateRefreshToken,
    generateAccessToken,
}