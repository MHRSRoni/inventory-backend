const {Schema, model} = require('mongoose')


const productSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'user',
        required : true,
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : 'category',
        required : true,
    },
    brand : {
        type : Schema.Types.ObjectId,
        ref : 'brand',
        required : true,
    },
    name : {
        type : String,
        required : true,
        trim : true,
    },
    details : {
        type : String,
    },
    cover : {
        type : String,
    },
    price : {
        type : Number,
    },
    quantity : {
        type : Number,
    }

}, {timestamps : true, versionKey : false})


const ProductModel = model('product', productSchema)

module.exports = ProductModel