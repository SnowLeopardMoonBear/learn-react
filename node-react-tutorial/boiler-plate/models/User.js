const mongoose = require('mongoose');

// Make schema of the model
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// Make the schema Mongoose model
const User = mongoose.model('User', userSchema); // 모델을 몽구스 모델화

module.exports = { User };