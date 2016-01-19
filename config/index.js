'use strict';

var nodeEnv = (function ()
{
    var env = process.env.NODE_ENV;

    if (!env) {
        env = process.env.NODE_ENV = 'development';
    } else if (!(env === 'development' || env === 'production' || env === 'testing')) {
        console.log('Error: NODE_ENV must be "development" or "production" or "testing"');
        process.exit(1);
    }

    return env;
})(); // direct call

var lewifiEnv = (function ()
{
    var env = process.env.LEWIFI_ENV;

    if (!env) {
        env = process.env.LEWIFI_ENV = 'development';
    } else if (!(env === 'development' || env === 'production')) {
        console.log('Error: LEWIFI_ENV must be "development" or "production"');
        process.exit(1);
    }

    return env;
})(); // direct call

var config = require('./config_current.js');
    config.nodeEnv = nodeEnv;
    config.lewifiEnv = lewifiEnv;

var API_HOST = {};
if (config.nodeEnv === 'development') {
    API_HOST.owlExpress = 'http://owl-express-pre.yoo.yunpro.cn';
} else {
    API_HOST.owlExpress = 'http://owl-express.yoo.yunpro.cn';
}
config.API_HOST = API_HOST;

console.log('Server NODE_ENV: %s', nodeEnv);
console.log('Server LEWIFI_ENV: %s', lewifiEnv);

module.exports = config;
