const { name } = require('ejs');
const mongoose = require ('mongoose');
const { describe } = require('node:test');
const { type } = require('os');
const { title } = require('process');



const movie3schema= mongoose.Schema({

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



const movie3 = mongoose.model("newmovie3",movie3schema);
module.exports =movie3;