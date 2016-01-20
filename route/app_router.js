'use strict';

module.exports = function (app) {

    //ping
    app.get('/ping', function (req, res) { res.send('OK'); });

    app.all('*', function (req, res, next) {
        next();
    });
    //main
    app.get('*/index*', function (req, res) { res.render('index'); });
    //user signup
    app.get('/signup.html', function (req, res) { res.render('signup'); });
    //user login
    app.get('/login.html', function (req, res) { res.render('login'); });
    //machine
    app.get('/machine.html', function (req, res) { res.render('machine'); });
    //machine
    app.get('/machines.html', function (req, res) { res.render('machines'); });
    //profile
    app.get('/profile.html', function (req, res) { res.render('profile'); });
    //profiles
    app.get('/profiles.html', function (req, res) { res.render('profiles'); });


}
