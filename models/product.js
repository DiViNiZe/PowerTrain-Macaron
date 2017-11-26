var conn = require('./connection');
var mysql = require('mysql');
exports.getProducts = function(callback){
    conn.query('select * from product',function(err,result,fields){
        callback(result);
    });
}

exports.getProdByID = function(id,callback){
    var sql ="SELECT * FROM product p join product_brand b on p.product_brand_id = b.product_brand_id join product_type t on p.product_type_id = t.product_type_id where product_id like ('"+id+"%');";
    conn.query(sql,function(err,result,fields){
        if(err)throw err;
        callback(result);
    });
}

exports.getProductByType = function(type){
    conn.query('select * from product where type = '+type ,function(err,result,fields){
        return result
    });
}

exports.getProductByBrand = function(brand){
    conn.query('select * from product where brand = '+brand ,function(err,result,fields){
        return result
    });
}

exports.putProduct = function(id,name,price,type,brand,img,com){
    conn.query("insert into product VALUES (?, ?, ?, ?, ?, ?, ?);",[id,name,price,type,brand,img,com]);
}