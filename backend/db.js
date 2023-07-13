const mongoose = require('mongoose')
const mongooURI = "mongodb+srv://sailendra9083:sailendra9083@encryasmi.6hiuqxk.mongodb.net/?retryWrites=true&w=majority"


const connectToMongo = () => {
    mongoose.connect(mongooURI)
}

module.exports = connectToMongo