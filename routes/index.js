const generalController = require('../controllers/generalControllers');

const express = require('express');
const router = express.Router();

//Get Home Page
router.get('/', generalController.getMainMenu);

module.exports = router;







