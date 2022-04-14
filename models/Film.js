const mongoose = require('mongoose')

const FilmSchema = mongoose.Schema({
    file_name:{
        type:String
    },
    film_type:{
        type:String
    },
    film_year:{
        type:String
    },
    film_link:{
        type:String
    }
})

module.exports = mongoose.model('films', FilmSchema)