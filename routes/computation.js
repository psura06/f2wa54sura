var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var num1= Math.abs(Math.random()*10)
  var num2= Math.abs(Math.random()*10)
  var num3= Math.abs(Math.random()*10)

  var hypot = Math.hypot(num1)
  var ceil = Math.ceil(num2) 
  var clz32 = Math.clz32(num3)
  res.render('computation', { title: 'Pooja Sura computation routes',
  num1:num1,
  num2:num2,
  num3:num3,
  hypot:hypot,
  ceil:ceil,
  clz32:clz32
});
});

module.exports = router;
