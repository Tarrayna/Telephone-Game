var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  if(req.body.action === 'createNewRoom')
  {
    console.log("Create New Room")
  }
  res.render('index', { title: 'Welcome' });
});

module.exports = router;
