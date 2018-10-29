const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const pref = require("./Preference.js");
// const pastPreference = require("./PastPreference");

const UserSchema = new Schema({
  info: {
    zip: {
      type: Number,
      required: false
    },   
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  preferences: {
    zip: {
      type: Array,
      required: false
    },
    cuisine: {
      type: Array,
      required: false
    },
    movieGenre: {
      type: Array,
      required: false
    },
    streamGenre: {
      type: Array,
      required: false
    },
    liveEventType: {
      type: Array,
      required: false
    }
  },
  pastChoices: {
    zip: {
      type: Number,
      required: false
    },
    restaurants: {
      type: Array,
      required: false
    },
    movies: {
      type: Array,
      required: false
    },
    streams: {
      type: Array,
      required: false
    },
    liveEvents: {
      type: Array,
      required: false
    }
  }
});

module.exports = User = mongoose.model("user", UserSchema);
