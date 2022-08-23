const express = require('express')
const router = require('./Routes/auth.route')
const app = express()



//In-Built Middleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(router)








module.exports = app