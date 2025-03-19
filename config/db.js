const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/Learning-Backend').then(()=>{
    console.log('connected to data base')
})

module.exports = connection