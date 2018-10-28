let keys = {};

if (process.env.NODE_ENV === "production") {
  keys = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.SECRET_OR_KEY
  };
} else {
  keys = require("./keys_dev");
}

module.exports = keys;
