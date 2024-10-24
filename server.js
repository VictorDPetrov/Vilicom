const express = require('express'),
    app = express(),
    port = 5330,
    session = require('express-session'),
    sessionSecret = "i3/tH2I0EyRZyP74xu9lc4mTdoRLuZSRu8GFBB1iBkD9T1dCxa6XBKQ==",
    cookieExpires = 1000 * 60 * 60;


const database = require('./controller/database'),
    homePage = require('./routes/home'),
    aboutUs = require('./routes/aboutUs'),
    services = require('./routes/services'),
    airConditioners = require('./routes/airConditioners'),
    gallery = require('./routes/gallery'),
    login = require('./routes/Admin/login'),
    contact = require('./routes/contact'),
    adminHome = require('./routes/Admin/adminHome'),
    logout = require('./routes/Admin/logout')

app.use(express.static('routes'));
app.use(express.static('view'));
app.use(express.static('controller'));

app.set('view engine', 'ejs');

// Session
app.use(session({
    secret: sessionSecret,
    name: 'vilicomSession',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: cookieExpires,
        httpOnly: true,
        sameSite: true
    },
}));

// Updating cookie time before expiring (60 minutes)
app.use(function (req, res, next) {
    req.session._garbage = Date();
    req.session.touch();
    next();
});

app.use('/', homePage);
app.use('/aboutUs', aboutUs);
app.use('/services', services);
app.use('/airConditioners', airConditioners);
app.use('/gallery', gallery);
app.use('/login', login);
app.use('/contact', contact);
app.use('/adminHome', adminHome);
app.use('/logout', logout);

app.listen(port, () => {
    console.log(`App is listening on http://vilicom-bg.com.localhost:${port}`)
})