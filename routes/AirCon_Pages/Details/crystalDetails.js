const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('AirCon_Pages/Details/crystalDetails');
});

module.exports = router;
