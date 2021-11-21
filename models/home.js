const mongoose = require("mongoose")

const homeSchema = new mongoose.Schema({
    product_id:{
        type:Number
    },
    ownerNamme:{
        type:String
    },
    sqfeet:{
        type:Number
    },
    beds:{
        type:Number
    },
    bath:{
        type:Number
    },
    price:{
        type:Number
    },
    place:{
        type:String
    },
    contactNumber:{
        type:Number
    }

})

module.exports = mongoose.model("homes",homeSchema)





