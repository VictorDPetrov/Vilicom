const database = require('../../controller/database');

const express = require('express'),
    router = express.Router();
router.get('/', async (req, res) => {
    if (req.session.loggedin) {
        database.database.query("SELECT firstName FROM users WHERE username = ?", req.session.username, function (selectError, result) {
            if (selectError) {
                console.error(selectError);
            }
            else {
                res.render('../View/Admin/home.ejs', {
                    username: Object.values(result[0])
                })
            }
        })
    }
    else {
        res.redirect('/');
    }
})

module.exports = router;