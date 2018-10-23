const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PreferenceSchema = new Schema({
    zip: {
        type: Number,
        required: true
    },
    movieGenre: {
        type: String,
        required: false
    },
    streamingSubscription: {
        type: Array,
        required: false
    },
    pastSubscriptions: {
        type: Array,
        required: false
    }

});

module.exports = Preference = mongoose.model("preference", PreferenceSchema);