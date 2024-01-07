//dependencies
const express = require('express')


//configuration
const {log} = require('./src/config/logger')
const {secure} = require('./src/config/security')
const {connectDatabase} =require('./src/config/db')


//environment
require('dotenv').config({path : `.env.${process.env.NODE_ENV?.toLowerCase()}`})



//router
const v1 = require('./src/router.v1')
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
app.use('/api/v1', router)



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
 * @param {String|DB_NAME} DB_NAME Database name for the application
 *@example startApp(PORT, DB_NAME) // server starting function
 */
app.startApp = async (port, DB_NAME) => {
    try{
        app.listen(port, ()=>{
            console.log('✅listening on port '+port)
                connectDatabase(DB_NAME) // database connection
            })
    } catch (error) {
        console.log('❌failed to start the server: '+error)
    }
}


module.exports = app