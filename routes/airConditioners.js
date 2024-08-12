const express = require('express'),
    router = express.Router();

router.get('/', async (req, res) => {
    res.render('../View/airConditioners.ejs')
})

module.exports = router;