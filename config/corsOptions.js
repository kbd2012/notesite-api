const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {
        if (origin) {
            callback(null, true);
        } else {
            callback(new Error('An origin is required'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 