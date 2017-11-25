var conn = require('./connection');

var getAllUsers = function(){
    conn.query('select * from users',function(err,result,fields){
        return result;
    });
}

var getUser = function(username){
    conn.query('select * from users where username = '+username,function(err,result,fields){
        return result;
    });        
}

var putUser = function(){
    conn.query('insert into users values ('+id+','+username+','+password+','+shopId+','+priorityId+');');
    // INSERT into users VALUES (4,'Felix','1234567890',1,1);
}

var changePassword = function(){
    conn
}