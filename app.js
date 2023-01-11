 const express = require('express');
 const request = require("request");
 const bodyParser = require('body-parser');

app = express();
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  var Fname = req.body.fName;
  var Lname = req.body.lName;
  var Email = req.body.email;
  console.log(Fname);
});

app.listen(3000, function(){
  console.log("Server started on pport 3000");
});
