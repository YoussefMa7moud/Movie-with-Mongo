const { name } = require('ejs');
const mongoose = require ('mongoose');
const { describe } = require('node:test');
const { type } = require('os');
const { title } = require('process');



const movie2schema= mongoose.Schema({

    Image:{
        type: String,
        required:[true,"Movie1"],
    },

    title:{
        type: String,
        required:[true,"Movie1"],
    },

    year:{
        type: String,
        required:[true,"add"],
    },

    duration:{
        type: String,
        required:[true,"enter date"],
    },

    type:{
        type: String,
        required:[true,"enter date"],
    },

    description:{
        type: String,
        required:[true,"enter date"],
    },


    coverphoto:{
        type: String,
        required:[true,"enter date"],
    },



});



const movie2 = mongoose.model("newmovie2",movie2schema);
module.exports =movie2;