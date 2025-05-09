const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('AirCon_Pages/Details/floorDaikin');
});

module.exports = router;
