const express = require('express'),
    router = express.Router();

router.get('/', async (req, res) => {
    res.render('../View/contact.ejs')
})

module.exports = router;