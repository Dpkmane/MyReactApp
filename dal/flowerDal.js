var sql=require('./mysql');

var flower= function(flower){
    this.id=flower.id;
    this.imageurl=flower.imageurl;
    this.name=flower.name;
    this. price=flower. price;
   
};
flower.getAllflower=function(result){
    sql.query("select * from flowers",function(err,res){

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            console.log(res);
            result(null,res);
        }
    });
};

module.exports=flower;