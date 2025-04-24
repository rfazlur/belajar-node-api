const mongoose = require('mongoose')

const userschema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, 'Please input your name']
        },
        email: {
            type: String,
            require: [true, 'Please input your email address']
        },
        gender: {
            type: String,
            require: [true, 'Please input your gender']
        }
    },
    {
        timestamps: true 
    }
)

const User = mongoose.model('User', userschema)
module.exports = User