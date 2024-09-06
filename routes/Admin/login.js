const express = require('express'),
    router = express.Router();

router.get('/', async (req, res) => {
    res.render('../View/Admin/Login.ejs')
})

module.exports = router;