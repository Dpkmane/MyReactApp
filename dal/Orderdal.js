const { response } = require('express');
var sql=require('./mysql');

var order= function(order){
    this.id=order.orderid;
    this.Producr=order.product;
    this.Date=order.orderDate;
    this.Amount=order.amount;
   
};

order.createOrder=function(newOrder,result){
    sql.query("inser into order set ?",newOrder,function(err,res){

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
};
order.getAllOrder=function(result){
    sql.query("select * from orders",function(err,res){

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            console.log(res);
            result(null,res);
            response.send(res);
        }
    });
};

order.remove = function(id, result){
    sql.query("DELETE FROM orders WHERE orderid = ?", [id],
                function (err, res) {
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                      result(null, res);
                  }
            }); 
};

module.exports=order;