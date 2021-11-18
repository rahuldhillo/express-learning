const express = require("express");
const app = express();

const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/about.html"));
});

// We can download file
// res.download easy peasy
app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname + "/about.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
