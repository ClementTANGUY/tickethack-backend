require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Add connection to DB
require('./models/connection');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tripsRouter = require('./routes/trips');
var cartsRouter = require('./routes/carts');
var bookingsRouter = require('./routes/bookings');


var app = express();
//Add cors
const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// Add new prefixes
app.use('/bookings', bookingsRouter);
app.use('/trips', tripsRouter);
app.use('/carts', cartsRouter);


module.exports = app;
