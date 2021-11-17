const express = require("express");

//below object will have functions
const app = express();

//first method we use is listen
//run by node server, server will start
// '/' means homepage, and will print cannot GET /
// add a call back function, as a second parameter,
// this will run after server will start
app.listen(3000, () => {
  console.log("server is running");
});
