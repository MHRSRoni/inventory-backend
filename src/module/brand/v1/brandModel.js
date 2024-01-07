const {Schema, model} = require('mongoose')


const brandSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'user',
        required : true,
    },
    name : {
        type : String,
        required : true,
        trim : true,
    },
    details : {
        type : String,
        required : true
    },
    cover : {
        type : String,
    }
}, {timestamps : true, versionKey : false})


const BrandModel = model('brand', brandSchema)

module.exports = BrandModel