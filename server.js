const express = require('express'),
    app = express(),
    port = 5330,
    session = require('express-session'),
    sessionSecret = "sXC2fFFFDbv55sKqGjrKSWWKK!PtcqPT4adsd231w@wWExdaS@#213s",
    cookieExpires = 1000 * 60 * 60;


const database = require('./controller/database'), 
    homePage = require('./routes/home'),
    forUs = require('./routes/forUs')

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
        httpOnly: true
    },
}));

// Updating cookie time before expiring (60 minutes)
app.use(function (req, res, next) {
    req.session._garbage = Date();
    req.session.touch();
    next();
});

app.use('/', homePage);
app.use('/forUs', forUs);

app.listen(port, () => {
    console.log(`App is listening on http://vilicom-bg.com.localhost:${port}`)
})