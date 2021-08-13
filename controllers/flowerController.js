var Flower = require('../dal/flowerDal');

exports.getAll=function(req,res){
    console.log("calling controller funtion");
    Flower.getAllflower(function(err,order){
        if(err)
        res.send(err);
        res.send(order);
    })
};