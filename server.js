const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mainRouter = require("./routes/index");
const productRouter = require("./routes/products");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(mainRouter);

app.use(productRouter);

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
