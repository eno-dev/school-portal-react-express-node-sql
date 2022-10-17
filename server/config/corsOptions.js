const cors = require('cors');
const allowedOrigins = require('./allowedOrigins')
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,            //access-control-allow-credentials:true
    origin: true,
    optionSuccessStatus: 200,
}

module.exports = corsOptions;