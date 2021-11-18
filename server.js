const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mainRouter = require("./routes/index");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(mainRouter);

// middleware is simply a func in express
// middleware is between req and res
// we will process res based on middleware after req
// different types of middleware.. application level, router level etc.
// and there are middleware for individual routes too - route middleware
// we have some built in middleware in express like express.static, error handling etc.

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
