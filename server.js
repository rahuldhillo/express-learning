const express = require("express");
const app = express();

const path = require("path");

const PORT = process.env.PORT || 3000;

// in public folder the index.html is by default acting as default file
// it is a convention
// So static content will load index file by default
// we can change about.html in browser path but for now we can use route
// We cankeep CSS and image file in public forlder as static content
// and then include in out html by simply using /path

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
