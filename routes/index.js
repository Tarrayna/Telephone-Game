var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome' , error: "Room Key Is Invalid"});
});

router.post('/', function(req, res) {
  console.log(req.body)
  if(req.body.action === 'createNewRoom')
  {
    console.log("Create New Room")
  }
  res.render('index', { title: 'Welcome'});
});

module.exports = router;
