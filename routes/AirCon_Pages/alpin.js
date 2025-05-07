const express = require('express');
const router = express.Router();

// Route to show Alpin models (default route for /alpin)
router.get('/', async (req, res) => {
    res.render('AirCon_Pages/alpin');
});

// Route to show details of a specific Alpin model, using dynamic routing
router.get('/:modelName/details', async (req, res) => {
    res.render('AirCon_Pages/alpinDetails');
});

module.exports = router;
