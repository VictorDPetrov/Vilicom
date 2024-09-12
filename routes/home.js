const express = require('express'),
    router = express.Router();

router.get('/', async (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/adminHome')
    }
    else {
        res.render('../View/home.ejs')
    }
})

module.exports = router;