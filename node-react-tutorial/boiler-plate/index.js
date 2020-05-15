const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser"); //to use request body data
const {User} = require('./models/User')

//to analyze application/x-www-form-urlencoded form data
app.use(bodyParser.urlencoded({ extended: true }));

//to analyze json data
app.use(bodyParser.json());

// connect MongoDB cluster with mongoose
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://mindflo:Sm88.cZpwMW$uwG@boilerplate-hreqx.mongodb.net/test?retryWrites=true&w=majority",
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

app.listen(port, () => {
  console.log(`Backend server listening at port ${port}!`);
});
