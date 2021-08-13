
    var orders=require('../dal/Orderdal');

exports.getAll=function(req,res){
    console.log("calling controller funtion");
    orders.getAllOrder(function(err,order){
        if(err)
        res.send(err);
        res.send(order);
    })
};

exports.insert=function(req,res){
    var new_order= new orders(req.body);
    if(!new_order.orderid || ! new_order.product){
        res.status(400).send({error:true,message:"please provide  "});
    }
    else{
        orders.createOrder(new_emp,function(err,order){
            if(err)
            res.send(err);
            res.send(order)
        });
    };
};

exports.remove = function(req, res) {
    orders.remove( req.params.id, function(err, order) {
      if (err)
        res.send(err);
      res.json({ message: 'Order successfully deleted' });
      console.log("Order is deleted...!!");
    });
};