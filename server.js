const express = require("express");
const app = express();

const path = require("path");

const PORT = process.env.PORT || 3000;

// It is simple to create routes in Express unlike Node
// Static Middleware -
// If we do not want to create route and out site is static
// We only need to serve the pages
// We can tell Express that where is our static folder
// then we do not need to create routes

// to use middleware we use .use
// move index and about.html in public
// about.html will not get
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
