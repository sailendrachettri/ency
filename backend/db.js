const mongoose = require('mongoose')
const mongooURI = "mongodb://localhost:27017/encryasmi?readPreference=primary&appname=MongoDB%20Compass&ssl=false"


const connectToMongo = () => {
    mongoose.connect(mongooURI)
}

module.exports = connectToMongo