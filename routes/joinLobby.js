const hostController = require('../controllers/hostController');
const playerController = require('../controllers/playerController');

var express = require('express');
var router = express.Router();

const fs = require('fs')
const path = require('path');

// GET host listing
router.get("/", hostController.getHostLobby);

// POST player listing.
router.post('/',playerController.postPlayerLobby);


module.exports = router;
