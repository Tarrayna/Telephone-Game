var express = require('express');
var router = express.Router();

// GET player lobby listing.
router.get('/player', function(req, res, next) {
    res.render('playerLobby', { title: 'Welcome to The Lobby' });
});

// GET host player listing.
router.get('/host', function(req, res, next) {
    res.send('respond with a resource');
    //res.render('playerLobby', { title: 'Welcome to The Lobby' });
});


module.exports = router;
