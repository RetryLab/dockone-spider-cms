'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var config = require('./config');
var appRouter = require('./route/app_router');

var app = express();

// set view engine
var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        ifeq: function (a, b, block) {
            return a == b ? block.fn() : block.inverse();
        }
    },
    defaultLayout: 'single',
    extname: '.hbs'
});

app.use(express.static(path.join(__dirname, 'public')));
// app.engine('html');
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/favicon.ico'));

// http request logger
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('common'));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

appRouter(app);

module.exports = app;
