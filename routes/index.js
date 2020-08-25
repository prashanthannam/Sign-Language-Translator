var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('home', {
        title: 'Sign Language Translator'
    });
});

module.exports = router;