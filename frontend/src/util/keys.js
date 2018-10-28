let keys = {};

if (process.env.NODE_ENV === "production") {
    keys = {
        mongoURI: process.env.MONGO_URI,
        secretOrKey: process.env.SECRET_OR_KEY,
        apiKeyYelp: process.env.API_KEY_YELP,
        apiKeyFandango: process.env.API_KEY_FANDANGO,
        apiSecretFandango: process.env.SECRET_FANDANGO,
        apiKeyTicketMaster: process.env.API_KEY_TICKETMASTER,
        apiSecretTicketMaster: process.env.SECRET_TICKETMASTER
    };
} else {
    keys = require("./keys_dev");
}

module.exports = keys;