const mongoose = require('mongoose');

// Create Schema
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    },
    resetLink:{
        data: String,
        default:''
    }
})


const User = mongoose.model('User', UserSchema)

module.exports = User