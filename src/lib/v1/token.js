const jwt = require('jsonwebtoken')

exports.generateToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1d' })
}

exports.decodeToken = (token) => {
    return jwt.decode(token, process.env.JWT_SECRET)
}

exports.verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}