const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mainRouter = require("./routes/index");
const apiKeyMiddleware = require("./middlewares/apiKey");

app.use(apiKeyMiddleware);

app.set("view engine", "ejs");

//Global middleware, we write app.use instead of router.use

app.use(express.static("public"));

app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
