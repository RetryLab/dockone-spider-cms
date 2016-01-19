#!/usr/bin/env node

'use strict';

var app = require('../app');
var config = require('../config');

app.set('port', config.express.port);

var server;

exports.start = starter;

function starter() {
    server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port);
    });
    app.close = function (callback) {
        server.close(callback);
    };
}

if (!module.parent) {
    process.title = config.appName + ': single worker';
    starter();
}
