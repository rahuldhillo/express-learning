const router = require("express").Router();
const products = require("../productsData");

router.get("/products", (req, res) => {
  res.render("products", {
    title: "My Products Page",
  });
});

// create api route
router.get("/api/products", (req, res) => {
  // fetch data from file
  res.json(products);
});

module.exports = router;
