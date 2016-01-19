'use strict';

module.exports = function (app) {

    //ping
    app.get('/ping', function (req, res) { res.send('OK'); });

    //main
    app.get('/index', function (req, res) { res.render('index'); });
    //user signup
    app.get('/sigup', function (req, res) { res.render('signup'); });
    //user login
    app.get('/login', function (req, res) { res.render('login'); });


}
