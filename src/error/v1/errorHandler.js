exports.errorHandler = (err, req, res, next) => {
    let error = null
    let status = err.status || 500
    let message = err.message || 'Something went wrong'
    if(process.env.NODE_ENV !== 'production') error = err

    return res.status(status).json({
        success : false,
        message : message,
        details : JSON.stringify(error)
    })
}