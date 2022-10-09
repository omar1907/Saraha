const mongoose = require('mongoose')

const msgSchema = mongoose.Schema({
    message:String,
    userId:mongoose.SchemaTypes.ObjectId
})

module.exports = mongoose.model('message',msgSchema)