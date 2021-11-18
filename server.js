const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mainRouter = require("./routes/index");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(mainRouter);

// Designining custom middleware
// We will simulate a req
// send dummy api key and check key to process req
// else send message to log not valid
// create route for path like /api/products?api_key=1234567
// create a seprate middlware folder

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
