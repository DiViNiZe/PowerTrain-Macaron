var express = require('express');
var router = express.Router();
var con = require('../models');
var pool  = require('../models');
var query = require('../models/query')

router.get('/',function(req, res, next) {
  // pool.query(query.all,function(err,result,fields){
  //   if(err)throw err;
  //   res.json(JSON.stringify(result));
  // });
  query.test('Hi')
});

module.exports = router;
