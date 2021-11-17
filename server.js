const express = require("express");

//below object will have functions
const app = express();

//first method we use is listen
//run by node server, server will start
// '/' means homepage, and will print cannot GET /
app.listen(3000);
