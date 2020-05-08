/*var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 8081

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb://localhost:27017/OnlineBookStore '

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})*/



const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');

const path=require('path');
const app=express();
const PORT=process.env.PORT || 8085;
const routes1=require('./routes/api');
const routes2=require('./routes/catapi');
const routes3=require('./routes/revapi');
const routes4=require('./routes/api');
const routes5=require('./routes/api');
mongoose.connect('mongodb://localhost:27017/OnlineBookStore',{
    useNewUrlParser:true ,
    useUnifiedTopology:true
});
mongoose.connection.on('connected',() => {
    console.log('mongoose is connected !!!');
})

 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan('tiny'));
app.use('/api',routes1);
app.use('/catapi',routes2);
app.use('/revapi',routes3);

app.listen(PORT,console.log(`Server is starting at ${PORT}`));