const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    posterUrl: {
        type: String,
        required: true
    }
},
    {timestamps: true}
)

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie