var express = require('express');
var router = express.Router();
var pool  = require('../models');
var product = require('../models/product');

router.get('/',function(req,res,next){
  product.getProducts(function(data){
    res.json(JSON.stringify(data));
  })
});

router.get('/:prodId',function(req, res, next) {
  product.getProdByID(req.params.prodId,function(data){
    res.json(JSON.stringify(data));
  });
});

module.exports = router;
