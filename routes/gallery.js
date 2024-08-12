const express = require('express'),
    router = express.Router();

router.get('/', async (req, res) => {
    res.render('../View/gallery.ejs')
})

module.exports = router;