'use strict';

module.exports = function (app) {

    //ping
    app.get('/ping', function (req, res) { res.send('OK'); });

    app.get('/script.js', function (req, res) { res.render('script'); })
    //user signup
    app.get('/signup.html', function (req, res) { res.render('signup'); });
    //user login
    app.get('/login.html', function (req, res) { res.render('login'); });

    app.all('*', function (req, res, next) {
        if(req.cookies['authorization'])
            next();
        else
            res.redirect('/login.html');
    });
    //main
    app.get('/index*', function (req, res) { res.render('index'); });
    //machine
    app.get('/machine.html', function (req, res) { res.render('machine'); });
    //machine
    app.get('/machines.html', function (req, res) { res.render('machines'); });
    //profile
    app.get('/profile.html', function (req, res) { res.render('profile'); });
    //profiles
    app.get('/profiles.html', function (req, res) { res.render('profiles'); });
    // clients
    app.get('/clients.html', function (req, res) { res.render('clients'); });

    app.get('/*', function (req, res) { res.render('index'); });
}
