const mongoose = require("mongoose")

const dressSchema = new mongoose.Schema({
    product_id:{
        type:Number
    },
    name:{
        type:String
    },
    size:{
        type:String
    },
    colour:{
        type:String
    },
    sex:{
        type:String
    },
    price:{
        type:Number
    },
    stocks:{
        type:Number
    }
})

module.exports = mongoose.model("dress",dressSchema)


















