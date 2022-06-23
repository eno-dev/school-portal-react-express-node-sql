const jwt = require('jsonwebtoken')


const generateAccessToken = (user) => {
    return jwt.sign({
        user, id: user.user_name, role: user.role_name
    },
        process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15s",
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({
        id: user.user_name, role: user.role_name
    },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' });
};

const handleRefreshToken = (req, res) => {
    //take the refresh token from the user
    const cookies = req.cookies;
    // check if there is a cookie with a jwt property
    if (!cookies?.jwt) return res.status(401).json("You are not authenticated!");
    const refreshToken = cookies.jwt;
    // const foundUser = currentUser.find(user => user.refreshToken === refreshToken)
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    const newRefreshTokenArray = []
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        err && console.log(err);
        // refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);
        user.refreshToken = [...newRefreshTokenArray, newRefreshToken]
        res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

        res.status(200).json({
            accessToken: newAccessToken,
        });
    });
};

module.exports = {
    generateRefreshToken,
    generateAccessToken,
    handleRefreshToken
}