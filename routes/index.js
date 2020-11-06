const generalController = require('../controllers/generalControllers');

var express = require('express');
var router = express.Router();

//Get Error Page. Probably good to delete TODO: Delete this
router.get('/', generalController.getInvalidKey);

//Get Home Page
router.post('/', generalController.getMainMenu);

module.exports = router;







