const express = require("express");
const bodyParser = require("body-parser");
var items =[];
var workitems=[];

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); 

app.get("/", (req, res) => {
    
    var today = new Date()
    var options ={
        weekday:"long",
        day:"numerical",
        month:"long"
    }
        
        var day= today.toLocaleDateString(options);
 
   res.render("list", {listtitle: day, newitem:items}) 
});
app.get("/work",(req,res)=>{
    res.render("list", {listtitle: "work list",newitem: workitems})
});
app.get("/about",(req,res)=>{
    res.render("about")
});
app.post("/",function(req,res){
    item = req.body.work;
    if(req.body.list==="work"){
        workitems.push(item);
        res.redirect("/work");
    }
    else{
    items.push(item);
    res.redirect("/");
    }
});
  
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
