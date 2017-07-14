var express = require('express');
var router = express.Router();
var path = require('path');
var filestream = require('fs');
// var request =  require('request');
// var request =  require('request-promise');

router.get('/', function(req, res, next){
   res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;
