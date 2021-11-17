const express = require("express");
const app = express();

const path = require("path");

const PORT = process.env.PORT || 3000;

// Now to generate multiple pages for our Website
// We will create new routes

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/about.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
