const express = require('express'),
    router = express.Router();

router.get('/', async (req, res) => {
    res.render('../View/services.ejs')
})

module.exports = router;