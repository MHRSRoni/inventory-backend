const {Schema, model} = require('mongoose')


const expenseSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'user',
        required : true,
    },
    type : {
        type : Schema.Types.ObjectId,
        ref : 'expenseType',
        required : true,
    },
    name : {
        type : String,
        required : true,
        trim : true,
    },
    amount : {
        type : Number,
        required : true,
        trim : true,
    },
    details : {
        type : String,
    },
    note : {
        type : String,
    }
    
}, {timestamps : true, versionKey : false})


const ExpenseModel = model('expense', expenseSchema)

module.exports = ExpenseModel