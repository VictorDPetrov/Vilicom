const express = require('express');
const router = express.Router();

// Show list of Alpin models
router.get('/', async (req, res) => {
    res.render('AirCon_Pages/alpin');
});

module.exports = router;
