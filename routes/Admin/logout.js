const express = require('express');
const session = require('express-session');
const router = express.Router();

router.get('/', function (req, res, next) {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            }
            else {
                isVerified = false;
                res.redirect('/')
            }
        });
    }
});

module.exports = router;