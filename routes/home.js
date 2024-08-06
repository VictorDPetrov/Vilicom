const express = require('express'),
    router = express.Router();

router.get('/', async (req, res) => {
    res.render('../View/home.ejs')
})

module.exports = router;