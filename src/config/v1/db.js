const mongoose = require('mongoose')

/***
 * Database Connection
 * @param {String} DB_NAME Database name for the application
 * @example await connectDatabase(DB_NAME)
 */

const connectDatabase = async (DB_URI) => {
    try {
        await mongoose.connect(DB_URI || process.env.DB_URI, {family : 4})
        console.log('✅Database connected successfully')
    } catch (error) {
        console.log('❌Database connection failed: ' + error)
    }
}

module.exports = {connectDatabase}

