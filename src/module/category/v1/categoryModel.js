const {Schema, model} = require('mongoose')


const categorySchema = new Schema({
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
    },
    cover : {
        type : String,
    }
}, {timestamps : true, versionKey : false})


const categoryModel = model('category', categorySchema)

module.exports = categoryModel