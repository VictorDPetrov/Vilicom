const express = require('express'),
    router = express.Router();

router.get('/', async (req, res) => {
    res.render('../View/AirCon_Pages/alpin.ejs')
})

module.exports = router;