const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')
app.set('port', 4000)

app.use(morgan('dev'))

//app.use(bodyparser.urlencoded({extended:true}))
//app.use(bodyparser.json())

//Rutas
app.use('/api/', require('./routes/prueba.route'))


//start server

app.listen(app.get('port'),()=>{
    console.log('listen port', app.get('port'))
})