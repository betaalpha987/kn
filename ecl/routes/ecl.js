const express = require('express');
const path = require('path');
const app = express();
const router = express.Router(); // Needed?
const MongoClient = require('mongodb').MongoClient;

router.get('/delivery', function(req, res, next) {
  
  router.use(express.static(path.join(__dirname,'../public')));
  res.render(path.join(__dirname,'../views/delivery')); /*Page needs no data passed to it*/
});

module.exports = router;