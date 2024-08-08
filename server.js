const express = require('express'),
    app = express(),
    port = 5330

const homePage = require('./routes/home'),
    forUs = require('./routes/forUs')

app.use(express.static('routes'));
app.use(express.static('view'));
app.use(express.static('controller'));

app.set('view engine', 'ejs');

app.use('/', homePage);
app.use('/forUs', forUs);

app.listen(port, () => {
    console.log(`App is listening on http://vilicom-bg.com.localhost:${port}`)
})