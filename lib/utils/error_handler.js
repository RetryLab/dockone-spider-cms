'use strict';

var config = require('../../config');
var debug = require('debug')('app');
var dump = require('./error').dump;

function errorHandler(error, req, res, next) {
    dump(error);
    debug('%o', error);

    res.status(error.status || 500);
    res.json(error);
}

// catch 404 and forward to error handler
function handler404(req, res, next) {
    var error = new Error('Not Found: "' + req.originalUrl + '"');
    error.status = 404;
    error.code = 404;
    next(error);
}

process.on('uncaughtException', function (error)
{
    dump(error);
    debug(new Date);
    debug('uncaughtException ERROR %o', error);
    debug('uncaughtException ERROR %o', error.stack);
});

module.exports.handler404 = handler404;
module.exports.errorHandler = errorHandler;
