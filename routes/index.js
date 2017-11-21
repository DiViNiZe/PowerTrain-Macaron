var express = require('express');
var http = require('http')
var router = express.Router();
var resourceMonitorMiddlewareCB = require('express-watcher').resourceMonitorMiddlewareCB

/* GET home page. */
router.get('/',function(req, res, next){
  // resourceMonitorMiddlewareCB(req, res, next, function(diffJson){
  //   data = diffJson
  //   })
  // res.send("Welcome to macaron POWERTRAIN API SERVER"+"</br>"+
  // "RAM : "+data.diffRAM+"</br>"+
  // "HEAP TOTAL : "+data.diffHeapTotal+"</br>"+
  // "HEAP USED : "+data.diffHeapUsed+"</br>"+
  // "EXTERNAL : "+data.diffExternal+"</br>"+
  // "CPU USE : "+data.diffCPU+"</br>"+
  // "time time : "+data.diffTime+"</br>")
  res.send("Welcome to macaron POWERTRAIN API SERVER")
})

module.exports = router;
// diffRAM: 4,
// diffHeapTotal: 0,
// diffHeapUsed: 5.65625,
// diffExternal: 0,
// diffCPU: 0,
// diffTime: 0 