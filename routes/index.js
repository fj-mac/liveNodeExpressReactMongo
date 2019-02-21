var express = require('express');
var router = express.Router();

router.post('/createMessage', function(req, res, next) {
  res.send("Hola");
});

router.get('/getMessages', function(req, res, next) {
  console.log("getMessages!!!!");
  res.send([
    {text:"John"}
  ]);
});


module.exports = router;
