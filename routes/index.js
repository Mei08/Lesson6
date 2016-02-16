var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Mei', function(req, res, next) {
  res.render('Mei', { title: 'Mei' });
})

router.get('/Yin', function(req, res, next) {
  res.render('Yin', { title: 'Yin' });
});

router.get('/Ray', function(req, res, next) {
  res.render('Ray', { title: 'Ray' });
});


module.exports = router;
