'use strict';

var ALY = require('aliyun-sdk');

var ALY_WD_BUCKET = 'peacock';

var oss = new ALY.OSS({
    accessKeyId: 'BYnexDvXxwZwlFxu',
    secretAccessKey: 'dxn8ttg5gbDTXdmdYeOrPUPYivaUx0',
    endpoint: 'http://oss-cn-qingdao.aliyuncs.com',
    apiVersion: '2013-10-15'
});

module.exports.oss = oss;

module.exports.getSignedUrl = function(key) {
    return oss.getSignedUrl('getObject', {
        Bucket: ALY_WD_BUCKET,
        Key: key,
        Expires: 6000
    });
};

module.exports.putObject = function(option, cb) {
    option.Bucket = option.Bucket || ALY_WD_BUCKET;
    oss.putObject(option, cb);
};
