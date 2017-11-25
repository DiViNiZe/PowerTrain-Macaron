var express = require('express');
var router = express.Router();
var con = require('../models');
var pool  = require('../models/connection');


/* GET users listing. */
router.get('/',function(req, res, next) {
  pool.query('select * from users',function(err,result,fields){
    if(err)throw err;
    res.json(JSON.stringify(result));
  });
});

module.exports = router;
