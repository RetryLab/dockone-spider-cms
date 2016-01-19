'use strict';

var request = require('request');

module.exports.sendRequest = function (uri, method, data, callback) {
    var options = {
        uri: uri,
        method: method,
        timeout: 5000,
        headers: {
            'yunlife-token': 'whosyourdaddy'
        },
        json: data || true
    };

    request(options, function(error, response, body) {
        if (error) return callback(error);

        callback(null, body);
    });
}
