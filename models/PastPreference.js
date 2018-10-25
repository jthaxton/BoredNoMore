const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PastChoiceSchema = new Schema({
    zip: {
        type: Number,
        required: true
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
});

module.exports = PastPreference = mongoose.model("pastChoice", PastChoiceSchema)