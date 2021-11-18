const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mainRouter = require("./routes/index");

app.set("view engine", "ejs");

app.use(express.static("public"));

// to maintain multiple pages use router
// we can create seprate files for different routes
// but can create an index.js for small projects
// We have to tell server file that we have routes

app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
