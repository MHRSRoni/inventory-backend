//dependencies
const express = require('express')
require('express-async-errors')


//configuration
const {log} = require('./config/v1/logger')
const {secure} = require('./config/v1/security')
const {connectDatabase} =require('./config/v1/db')


//environment
require('dotenv').config({path : `.env.${process.env.NODE_ENV?.toLowerCase()}`})



//router
const v1 = require('./router.v1')
const CustomError = require('./error/v1/CustomError')
const { errorHandler } = require('./error/v1/errorHandler')




//=========== app ============//
const app = express() 

//security and loging implementation
secure(app)   
log(app)      


//body parser
app.use(express.json())


//===========routes===========//
app.use('/api/v1', v1)



//not found handeling
app.use('*',(req, res, next)=>{
    try {
        throw new CustomError(404, 'page not found')
    } catch (error) {
        next(error)
    }
})

//error handlers
app.use(errorHandler)





/** 
 * Start the server
 * @param {Number|PORT} port PORT of the server
 * @param {String} DB_URI Database url for the application
 *@example startApp(PORT, DB_NAME) // server starting function
 */
app.startApp = async (port, DB_URI) => {
    try{
        app.listen(port, ()=>{
            console.log('✅listening on port '+port)
                connectDatabase(DB_URI) // database connection
            })
    } catch (error) {
        console.log('❌failed to start the server: '+error)
    }
}


module.exports = app