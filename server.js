const express = require("express");
const app = express();

// Our port is hardcoded below, if port is unavaiable then we have a prob.
// So we will create a env variable and use 3000 as fall back
// We can setup PORT in terminal PORT = 5000 node server

const PORT = process.env.PORT || 3000;

//fixing cannot GET/
// for get req for root and pass second parameter
// for req and res
app.get("/", (req, res) => {
  res.send("<h1>Hello from Express..,</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
