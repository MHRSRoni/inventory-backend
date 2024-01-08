const {Schema, model} = require('mongoose')


const purchaseProduct = new Schema({
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

const purchaseSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'user',
        required : true,
    },
    supplier : {
        type : Schema.Types.ObjectId,
        ref : 'supplier',
        required : true,
    },
    products : {
        type : [purchaseProduct],
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


const PurchaseModel = model('purchase', purchaseSchema)

module.exports = PurchaseModel