var Ordercontrol=require("./controllers/orderController");
var detailsControl=require('./controllers/orderDetailController');
var flowerControl=require('./controllers/flowerController');
module.exports=function(app){

    app.route("/api/orders")
    .get(Ordercontrol.getAll)
    .post(Ordercontrol.insert)
    .delete(Ordercontrol.remove)

    app.route("/api/orderdetails")
    .get(detailsControl.getAll)
    .post(detailsControl.insert)
    .delete(detailsControl.remove)

    app.route("/api/flowers")
    .get(flowerControl.getAll)
};