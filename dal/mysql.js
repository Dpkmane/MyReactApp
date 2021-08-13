var mysql=require("mysql");

var dbserver={
    host:"localhost",
    user:'root',
    password:'1545',
    database:'e_commerce'
};
var connection=mysql.createConnection(dbserver);
        connection.connect(function(err){
    console.log(err);
});

module.exports=connection;