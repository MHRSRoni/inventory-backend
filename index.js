const app = require('./src/app')
require('dotenv').config({path : `./src/.env.${process.env.NODE_ENV?.toLowerCase()}`})


app.startApp(process.env.PORT, process.env.DB_URI)

