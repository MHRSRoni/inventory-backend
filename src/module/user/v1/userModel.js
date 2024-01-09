const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cover : {
        type : String,
        required : true
    },
    isVerified : {
        type : Boolean,
        default : false
    }
}, {timestamps : true, versionKey : false})


const UserModel = model('user', userSchema)

module.exports = UserModel