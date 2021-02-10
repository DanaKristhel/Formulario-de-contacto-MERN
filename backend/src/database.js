const mongoose = require('mongoose')

URI = ('mongodb://localhost/pruebadb1')

mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(db =>console.log('conected database'))
.catch(err => console.log(err))

module.exports = mongoose