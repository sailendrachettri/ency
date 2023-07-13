// const mongoose = require('mongoose')
// const mongooURI = "mongodb+srv://sailendra9083:sailendra9083@encryasmi.6hiuqxk.mongodb.net/?retryWrites=true&w=majority"


// const connectToMongo = () => {
//     mongoose.connect(mongooURI)
// }

// module.exports = connectToMongo

import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://sailendra9083:sailendra9083@encryasmi.6hiuqxk.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("<databaseName>").collection("<collectionName>");
    // perform actions on the collection object
    client.close();
});