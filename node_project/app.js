var express = require("express");
var app = express();
var router = express.Routeur();

var path = __dirname + "/views";

const PORT = 8080;
const HOST = "0.0.0.0";

router.get("/", function(req, res){
  res.senFile(path + "index.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(8080, function(){
  console.log("node app listening 8080");
});
