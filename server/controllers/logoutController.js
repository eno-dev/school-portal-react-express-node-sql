const { deleteRefreshToken } = require('./refreshTokenController')

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No content
    const refreshToken = cookies.jwt;
    // Delete store refresh token
    deleteRefreshToken(refreshToken)

    return res
        .clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
        .status(200).json("You logged out successfully!")
}

module.exports = { handleLogout }