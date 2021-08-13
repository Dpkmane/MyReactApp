var detailsDal=require("../dal/oderDtetailsdal");

exports.getAll = function(req, res) {
    console.log("calling controller function");
    detailsDal.getAllOrderdetails(function(err, orderdetails) {  //invoking this fun from flowersDal file
      if (err)
        res.send(err);
      res.send(orderdetails);
    });
  };

  exports.insert = function(req, res) {
    var new_Orderdetails = new detailsDal(req.body);
    console.log(new_Orderdetails.body); //print at console
  
     if(!new_Orderdetails.orderdetailid || !new_Orderdetails.orderid){
        res.status(400).send({ error:true, message: 'Please provide OrderDetails/status' });
      }
     else{
      detailsDal.createOrderdetails(new_Orderdetails, function(err, Orderdetails) {
        if (err)
        res.send(err);
        res.json(Orderdetails);
      });
    }
  };

  exports.remove = function(req, res) {
    detailsDal.remove( req.params.id, function(err, orderdetails) {
    if (err)
      res.send(err);
    res.json({ message: 'Orderdetail successfully deleted' });
    console.log("Orderdetail is deleted...!!");
  });
};
  