const express = require('express');
const bodyParser = require('body-parser');

const app=express();
app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
var items = ["wake up","brush","sleep"]
app.get("/",function(req,res){
  res.render("list",{items:items})
  })
app.post("/",function(req,res){
  var item = req.body.newTodo
  if(item === "")
  {
    res.redirect("/")
  }
  else{
  items.push(item)
  res.redirect("/")
}
})














app.listen(3000,function(){
  console.log("Server Ported!");
})
