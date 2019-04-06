var express = require("express"),
    app    = express(),
    bodyParser = require("body-parser");
     
var todoroutes= require("./routes/todos.js");
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.send({message:"hi from express"});
});     

app.use("/api/todos", todoroutes);     
     
app.listen(port,process.env.PORT,function(){
   console.log("server is running on port : " + process.env.PORT); 
});