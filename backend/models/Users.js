const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    phone: {
        type: Number
    }
})

module.exports = mongoose.model('user', UserSchema)