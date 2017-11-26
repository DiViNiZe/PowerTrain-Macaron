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

router.get('/:id/:name/:price/:type/:brand/:img/:com',function(req, res, next) {
  product.putProduct(
    req.params.id,    
    req.params.prodId,
    req.params.name,
    req.params.price,
    req.params.type,
    req.params.brand,
    req.params.img,
    req.params.com
    );
    res.send('insert '+ req.params.name+' Complete');
});
module.exports = router;
