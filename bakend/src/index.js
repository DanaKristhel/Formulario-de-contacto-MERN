const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')

app.set('port', 4000)

//app.use(morgan('dev'))

//app.use(bodyparser.urlencoded({extended:true}))
//app.use(bodyparser.json())

//start server

app.listen(app.get('port'),()=>{
    console.log('listen port', app.get('port'))
})