const express = require("express");
const app = express();

// Our port is hardcoded below, if port is unavaiable then we have a prob.
// So we will create a env variable and use 3000 as fall back

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
