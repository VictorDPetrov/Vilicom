const express = require('express');
const app = express();
const port = 5330;

const homePage = require('./routes');

app.use(express.static('routes'));
app.use(express.static('view'));
app.use(express.static('controller'));

app.set('view engine', 'ejs');

app.use('/', homePage);

app.listen(port, () => {
    console.log(`App is listening on http://vilicom-bg.com.localhost:${port}`)
})