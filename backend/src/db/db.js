const mongoose = require('mongoose')

async function connectDB(){
    mongoose.connect(process.env.MONGODB_STRING)
    console.log("database connected")
}

module.exports = connectDB