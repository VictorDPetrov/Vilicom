const express = require('express'),
    router = express.Router();

router.get('/', async (req, res) => {
    res.render('../View/aboutUs.ejs')
})

module.exports = router;