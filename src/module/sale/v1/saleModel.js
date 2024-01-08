const {Schema, model} = require('mongoose')


const saleProduct = new Schema({
    product : {
        type : Schema.Types.ObjectId,
        ref : 'product',
        required : true,
    },
    quantity : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true,
    },
    total : {
        type : Number,
        required : true
    },
}, {timestamps : true, versionKey : false})

const saleSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'user',
        required : true,
    },
    customer : {
        type : Schema.Types.ObjectId,
        ref : 'customer',
        required : true,
    },
    products : {
        type : [saleProduct],
        required : true,
        validate : {
            validator : v => Array.isArray(v) && v.length > 0 ,
            message : 'Please provide at least one product'
        },
    },
    total : {
        type : Number,
        required : true,
        trim : true,
    },
    vatTax : {
        type : Number,
        required : true,
        trim : true,
    },
    discount : {
        type : Number,
        required : true,
        trim : true,
    },
    otherCost : {
        type : Number,
        required : true,
        trim : true,
    },
    shippingCost : {
        type : Number,
        required : true,
        trim : true,
    },
    grandTotal : {
        type : Number,
        required : true,
        trim : true,
    },
    note : {
        type : String,
    }

}, {timestamps : true, versionKey : false})


const SaleModel = model('sale', saleSchema)

module.exports = SaleModel