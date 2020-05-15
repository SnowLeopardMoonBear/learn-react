const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); // password encryption
const saltRounds = 10;

// Make schema of the model
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});
// unique:1 means the property should be unique in the model

// encrypt password
userSchema.pre("save", function (next) {
  var user = this; // represents the schema
  if(user.isModified('password')){
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err)
      bcrypt.hash(user.password, salt, function (err, hash){
        if(err) return next(err)
        user.password = hash // replace plain pw with hashed one
        next()
      })
    })
  } else {
    next() // don't forget to call next() whether password changes or not
  }
});

// Custom function of the schema tp compare encrypted plain pw with stored encrypted pw 
userSchema.methods.comparePassword = function(plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, function(err, isMatch){
    if(err) return cb(err),
    cb(null, isMatch)
  })
}

// Make Mongoose model with schema above
const User = mongoose.model("User", userSchema); // 모델을 몽구스 모델화

module.exports = { User };
