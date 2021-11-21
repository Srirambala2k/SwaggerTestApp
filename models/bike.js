const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
    name:{
        type:String
    },

    brand:{
        type:String
    },
    cc:{
        type:Number
    },
    topspeed:{
        type:Number
    },
    price:{
        type:Number
    }

})

module.exports = mongoose.model("bikes",bikeSchema)