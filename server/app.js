var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var RateLimit = require('express-rate-limit');

import {routes as routesTodos} from './todos/index';
import {routes as routesUsers} from './users/index';
import {routesAuth} from './security/index';
import {routesMiddleware} from './security/index';

var config = require('./config');

var app = express();

mongoose.connect(config.mongo, {server: {auto_reconnect: true}});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var limiter = new RateLimit({
    windowMs: 1000, // 1 minute
    max: 100, // limit each IP to 100 requests per windowMs
    delayMs: 10 // disable delaying - full speed until the max limit is reached
});

//  apply to all requests
app.use(limiter);

app.use(routesMiddleware.unless({
    path: [
        {url: '/users/register', methods: ['POST']},
        {url: '/auth/authenticate', methods: ['POST']}
    ]
}));
app.use('/todos', routesTodos);
app.use('/users', routesUsers);
app.use('/auth', routesAuth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
