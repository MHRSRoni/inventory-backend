const {Schema, model} = require('mongoose')


const expenseTypeSchema = new Schema({
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
    }
    
}, {timestamps : true, versionKey : false})


const ExpenseTypeModel = model('expenseType', expenseTypeSchema)

module.exports = ExpenseTypeModel