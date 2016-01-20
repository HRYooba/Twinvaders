var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.session.user) {
    res.render('pcMain.ejs');
  } else {
    res.render('login.ejs');
  }
});

module.exports = router;
