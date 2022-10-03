const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/recipe", function(req, res) {
  res.render("recipe");
});

app.get("/download", function(req, res) {
  res.render("download");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/explore", function(req, res) {
  res.render("explore");
});




let port = process.env.PORT;
if (port == null || port == ""){
  port = 3000;
}


app.listen(port, function() {
  console.log("Server is running on port 3000.");
});
