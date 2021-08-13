var expr=require('express');
var path=require('path');
var app=expr();
var cors=require ('cors');
app.use(expr.static(path.join(__dirname,"public")));
app.use(expr.urlencoded({extended:true}));
app.use(expr.json());
app.use(cors());

app.get("/",function(req,res){
    res.sendFile("index.html");
});

var routes=require("./router");
routes(app);

app.listen(7575);
