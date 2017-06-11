const express = require('express');
const path = require('path');
const app = express();
const router = express.Router(); // Needed?
const MongoClient = require('mongodb').MongoClient;

let db;
MongoClient.connect(process.env.DATABASE_URL, (err,database) => {
  if (err) return console.log(err);
  db = database;
});

router.get('/', function(req, res, next) {
  
  db.collection('cars').find().toArray(function(err,cResult) {
    if(err) return console.log('Cars collection get error: ', err);

    router.use(express.static(path.join(__dirname,'../public')));
    res.render(path.join(__dirname,'../views/delivery'), {
      cars:cResult
    });
  });
});

module.exports = router;