const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstname : { type : String},
    lastname : { type : String},
    checkbox : { type : Boolean}
})

module.exports = mongoose.model('crud',userSchema)