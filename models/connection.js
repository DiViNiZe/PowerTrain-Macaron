var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host     : '103.82.249.32',
    user     : 'macaron_dev',
    password : 'Nittaya120037850',
    database : 'patricem_macaron'
  });

  var closePull = function(){
      pool.end;
      return;
  }
module.exports = pool;
