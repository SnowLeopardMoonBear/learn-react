const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mindflo:Sm88.cZpwMW$uwG@boilerplate-hreqx.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('MongoDB connected...')).catch(err => console.log(err));

app.get('/', (req, res)=> res.send("<h1>Hello, world!</h1>"))
app.listen(port, ()=>{console.log(`Backend server listening at port ${port}!`)})