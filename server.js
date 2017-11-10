//import dependecies
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/db');
const Students = require('./api/models/studentModel');//custom model
const bodyParser = require('body-parser');
const cors = require('cors');



//initiating express
let app = express();
let port = 1000;
app.use(cors());
//connecting to mongoose database
 mongoose.Promise = global.Promise;
 //mongoose.connect('mongodb://localhost/schoolrunsdb', {
    mongoose.connect(db.url,{
     useMongoClient: true
 });
var dbase = mongoose.connection;

//bind connection to error event
dbase.on('error', console.error.bind(console, 'MongoDB connection error:'));



//using body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//studentRoutes
const routes = require('./api/routes/studentRoutes');
routes(app);

//Pages routes
app.get('/', function(req, res){
    res.render('index');
});

app.get('/profiles', function(req, res){
    res.render('profiles');
});

app.get('/profiles/:studentId', function(req, res){
    res.render('account');
});

app.get('/admin', function(req, res){
    res.render('admin');
});

app.get('/login', function(req, res){
    res.render('login');
});

//middleware for page errors
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

//start server on specified port
app.listen(port, () => {
    console.log('we are live on port ' + port);
});
