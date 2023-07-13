const mongoose = require('mongoose')
// const mongooURI = "mongodb://localhost:27017/encryasmi?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const mongooURI = "mongodb+srv://sailendra9083:sailendra9083@encryasmi.6hiuqxk.mongodb.net/"


const connectToMongo = () => {
    mongoose.connect(mongooURI)
}

module.exports = connectToMongo