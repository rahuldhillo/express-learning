const express = require("express");
const app = express();

// to generate path, to use different files like index.html
const path = require("path");

const PORT = process.env.PORT || 3000;

// but we never send inline html
// hence create a file
// use path to senFile
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
