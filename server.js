const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

// tell express that we want to use something in this case view engine
// app.set
// set method accepts key value and then we can use it by get

app.set("view engine", "ejs");

console.log(app.get("view engine"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/about.html"));
});

app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname + "/about.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});

// Now we will use template engine - pug, handlebar, ejs
// We will use ejs for dynamic pages
