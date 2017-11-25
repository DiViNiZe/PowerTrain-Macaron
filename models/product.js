var conn = require('./connection')

var getProducts = function(){
    conn.query('select * from product',function(err,result,fields){
        return result
    });
}

var getProductById = function(id){
    conn.query('select * from product where id = '+id ,function(err,result,fields){
        return result
    });
}

var getProductByType = function(type){
    conn.query('select * from product where type = '+type ,function(err,result,fields){
        return result
    });
}

var getProductByBrand = function(brand){
    conn.query('select * from product where brand = '+brand ,function(err,result,fields){
        return result
    });
}

var putProduct = function(id,type,brand){
    conn.query('insert into product values('+id+','+type+','+brand+');');
}