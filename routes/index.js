var express = require('express');
var router = express.Router();

function connect(callback) {
  var MongoClient = require("mongodb").MongoClient;

  var url = "mongodb://localhost:27017";

  var client = new MongoClient(url);

  client.connect(function (err) {
    if (err !== null) throw err;

    var db = client.db("dbComments");
    var comments = db.collection("comments");

    console.log("Connected!");
    callback(comments, client);
  });
}


function getComments(callback) {

  connect(function (comments, client) {
    comments.find({})
      .limit(100)
      .toArray(function (err, docs) {
        if (err !== null) throw err;
        console.log("got " + docs.length + " comments");
        callback(docs);
        client.close();
      });
  });

}

function createComment(c) {
  connect(function (comments, client) {
    comments.insertOne(c, function (err) {
      if (err!==null) throw err;

      console.log("Inserted!!!");
    });
  });
}


router.post('/createMessage', function(req, res, next) {

  createComment({
    text:req.body.text
  })
  res.redirect("/");
});

router.get('/getMessages', function(req, res, next) {
  console.log("getMessages!!!!");
  getComments( function (docs) {
    res.send(docs);
  });

});


module.exports = router;
