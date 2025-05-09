require('dotenv').config();
const express = require('express'),
    app = express(),
    port = process.env.PORT,
    session = require('express-session'),
    sessionSecret = process.env.sessionSecret,
    cookieExpires = 1000 * 60 * 60;
    path = require('path');


const database = require('./controller/database'),
    homePage = require('./routes/home'),
    aboutUs = require('./routes/aboutUs'),
    services = require('./routes/services'),
    airConditioners = require('./routes/airConditioners'),
    gallery = require('./routes/gallery'),
    login = require('./routes/Admin/login'),
    contact = require('./routes/contact'),
    alpin = require('./routes/AirCon_Pages/alpin'),
    carrier = require('./routes/AirCon_Pages/carrier'),
    crystal = require('./routes/AirCon_Pages/crystal'),
    daikin = require('./routes/AirCon_Pages/daikin'),
    general = require('./routes/AirCon_Pages/general'),
    gree = require('./routes/AirCon_Pages/gree'),
    hisense = require('./routes/AirCon_Pages/hisense'),
    hitachi = require('./routes/AirCon_Pages/hitachi'),
    mitsubishi = require('./routes/AirCon_Pages/mitsubishi'),
    toshiba = require('./routes/AirCon_Pages/toshiba'),
    alpinDetails = require("./routes/AirCon_Pages/Details/alpinDetails"),
    crystalDetails = require("./routes/AirCon_Pages/Details/crystalDetails"),
    comforaDaikin = require("./routes/AirCon_Pages/Details/comforaDaikin"),
    perferaDaikin = require("./routes/AirCon_Pages/Details/perferaDaikin"),
    ururuDaikin = require("./routes/AirCon_Pages/Details/ururuDaikin"),
    floorDaikin = require("./routes/AirCon_Pages/Details/floorDaikin"),
    adminHome = require('./routes/Admin/adminHome'),
    logout = require('./routes/Admin/logout')

    // Include routes
const airConditionersRouter = require('./routes/airConditioners');

app.use(express.static('routes'));
app.use(express.static('view'));
app.use(express.static('controller'));

app.use('/static', express.static(path.join("/View/Images/Gallery", 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'View'));  // Make sure the views path is set

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
app.use('/login', login);
app.use('/logout', logout);
app.use('/aboutUs', aboutUs);
app.use('/services', services);
app.use('/airConditioners', airConditioners);
app.use('/gallery', gallery);
app.use('/contact', contact);
app.use('/adminHome', adminHome);
app.use('/alpin', alpin);
app.use('/carrier', carrier);
app.use('/crystal', crystal);
app.use('/daikin', daikin);
app.use('/general', general);
app.use('/gree', gree);
app.use('/hisense', hisense);
app.use('/hitachi', hitachi);
app.use('/mitsubishi', mitsubishi);
app.use('/toshiba', toshiba);
app.use('/alpinDetails', alpinDetails);
app.use('/crystalDetails', crystalDetails);
app.use('/comforaDaikin', comforaDaikin);
app.use('/perferaDaikin', perferaDaikin);
app.use('/ururuDaikin', ururuDaikin);
app.use('/floorDaikin', floorDaikin);
// Use routes
app.use('/airConditioners', airConditionersRouter);


app.listen(port, () => {
    console.log(`App is listening on http://vilicom-bg.com.localhost:${port}`)
})