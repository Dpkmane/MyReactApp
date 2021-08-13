var sql=require('./mysql');

var details = function(Orderdetails){

    //Constructor
    this.orderdetailid=Orderdetails. id
    this.orderid = Orderdetails.orderid;
    this.quantity = Orderdetails.quantity;
};

details.createOrderdetails = function (newOrderdetails, result) {  
   
    console.log(newOrderdetails);
    sql.query("INSERT INTO orderdetails set ?", newOrderdetails, function (err, res) {
            if(err) {
              console.log( err);
              result(err, null);
            }
            else{
              console.log(res.insertId);
              result(null, res.insertId);
            }
        });           
};

details.getAllOrderdetails = function (result) {
    console.log("Invoking dal getall Orderdetails");
    
      sql.query("Select * from orderdetails", function (err, res) {
              if(err) {
                console.log( err);
                result(null, err);
              }
              else{
                console.log(res);  
                result(null, res);
              }
          });   
};

details.remove = function(id, result){
    sql.query("DELETE FROM orderdetails WHERE orderdetailid = ?", [id],
                function (err, res) {
                  if(err) {
                      console.log(err);
                      result(null, err);
                  }
                  else{
                      result(null, res);
                  }
            }); 
};

module.exports=details;