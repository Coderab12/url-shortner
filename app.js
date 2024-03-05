const express = require('express')
const app = express()
const port = 3000
const urlroutes = require('./routes/urlRoutes')
const staticroutes = require('./routes/StaticRoutes')
const connection = require('./connection')

app.set("view engine", "ejs")
app.set("views", "views")
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/url', urlroutes)
app.use('/', staticroutes)

connection()

app.listen(port, () => {
  console.log('App listening on port 3000')
})
