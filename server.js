const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

// now instead of sendFile we will use render
// render will render the view/ templates
// no need to use .ejs extension just pass the name
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname + "/about.html"));
});
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
