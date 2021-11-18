const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

// We can rename the views folder by app.set
app.set("views", path.resolve(__dirname) + "/templates");
console.log(app.get("views"));

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
