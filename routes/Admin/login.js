const express = require('express');
const session = require('express-session');
const database = require('../../controller/database');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', async (req, res) => {
    if(req.session.loggedin) {
        res.send(`Welcome ${req.session.username}`);
    }
    else {
        res.render("../View/Admin/Login.ejs");
    }
});

router.post('/', async (req, res) => {
    const { username, pass } = req.body;

    if (username && pass) {
        database.database.query("SELECT * FROM users WHERE username = ? AND pass = ?", [username, pass], function (selectError, result) {
            if (selectError) {
                console.error(selectError);
                return res.status(500).json({ error: "Database query error" });
            }

            if (result.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/adminHome')
            } else {
                return res.status(401).json({ error: "Invalid username or password" });
            }
        });
    } else {
        res.status(400).json({ error: "Please provide username and password" });
    }
});


module.exports = router;