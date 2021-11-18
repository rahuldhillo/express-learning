const router = require("express").Router();
const apiKeyMiddleware = require("../middlewares/apiKey");

// define routes

router.get("/", (req, res) => {
  res.render("index", {
    title: "My Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "My About Page",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname + "/about.html"));
});

// send json and array of objects to api
// pass middleware as second argument

router.get("/api/products", apiKeyMiddleware, (req, res) => {
  res.json([
    {
      id: "123",
      name: "Chrome",
    },
    {
      id: "124",
      name: "Firefox",
    },
  ]);
});

module.exports = router;
