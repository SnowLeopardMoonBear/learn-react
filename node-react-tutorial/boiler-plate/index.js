const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser"); //to use request body data

const config = require('./config/key')
const {User} = require('./models/User')

//to analyze application/x-www-form-urlencoded form data
app.use(bodyParser.urlencoded({ extended: true }));

//to analyze json data
app.use(bodyParser.json());

// connect MongoDB cluster with mongoose
// mongoURI is saved at dev.js or process.env.MONGO_URI of heroku
const mongoose = require("mongoose");
mongoose
  .connect(
    config.mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("<h1>Hello, world!</h1>"));

// send register info from client to MongoDB cluster  
app.post("/register", (req, res) => {
  // If client sends Info needed for sign up, put them in out DB.
  const user = new User(req.body); // bodyParser made it possible
  user.save((err, userInfo) => { //save user info
    if (err) return res.json({ success: false, err });
    console.log(userInfo);
    return res.status(200).json({
      success: true
    });
  }); // method from mongoDB. to save data
});

// implement login
// 1. Search requested email from DB
// 2. If exists, check if the password is correct
// 3. If password matches, give token to user
app.post('/login', (req, res) => {
  // 1. Search email data from requested email inside DB with .findOne() method
  User.findOne({email: req.body.email}, (err, user)=>{
    if (!user){
      return res.json({
        loginSuccess: false, 
        message: "no User matches"
      })
    }
    // Use custom method from DB schema
    user.comparePassword(req.body.password,(err, isMatch) => {
      if(!isMatch)
        return res.json({loginSuccess: false, message:"wrong password"})
      // if pw matches, generate login token and attach on response
      user.generateToken((err, user)=>{

      })

    })
  }) 
})

app.listen(port, () => {
  console.log(`Backend server listening at port ${port}!`);
});
