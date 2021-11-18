const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mainRouter = require("./routes/index");

app.set("view engine", "ejs");

app.use(express.static("public"));

// we can use first parameter as prefix

app.use("/en", mainRouter);

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
