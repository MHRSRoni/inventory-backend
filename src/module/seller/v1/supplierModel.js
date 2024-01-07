const {Schema, model} = require('mongoose')

const supplierSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'user',
        required : true,
    },
    cover : {
        type : String,
        trim : true,
    },
    name : {
        type : String,
        required : true,
        trim : true,
    },
    phone : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
    },
    address : {
        type : String,
        required : true,
    }
}, {timestamps : true, versionKey : false})


const SupplierModel = model('supplier', supplierSchema)

module.exports = SupplierModel