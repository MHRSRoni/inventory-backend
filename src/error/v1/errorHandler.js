const mongoose = require("mongoose")

exports.errorHandler = (err, req, res, next) => {
    let error = null
    let status = err.status || 500
    let message = err.message || 'Something went wrong'
    if(process.env.NODE_ENV !== 'production') error = err

     //handle mongoose validation error
     if(err instanceof mongoose.Error.ValidationError){
        let errorKeys = Object.keys(err.errors)
        let firstError = err.errors[errorKeys[0]]
        let message = firstError.message.replace("Path ", '').replace('.','')
        if(firstError.name === 'CastError') message = `Please provide ${firstError.path} in valid format`
        status = 400
        return res.status(400).json({success : false, message, error })
    }
    if(err instanceof mongoose.Error.CastError){
        let firstError = err
        let message = firstError.message.replace("Path ", '').replace('.','')
        if(firstError.name === 'CastError') message = `Please provide ${firstError.path} in valid format`
        status = 400
        return res.status(400).json({success : false, message, error })
    }

    delete error.status
    return res.status(status).json({
        success : false,
        message : message,
        details : error
    })
}