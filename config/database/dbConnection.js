const mongoose = require('mongoose')
require('dotenv').config()

module.exports.dbConnection=() => {
    // console.log({url:process.env.CONNECT_TEXT});
    mongoose.connect(process.env.CONNECT_TEXT,()=>{
        console.log('db Connected');
    })
}