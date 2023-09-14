const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();

app.use(express.json());

let products = [
  { id: '1', name: "Product A" },
  { id: '2', name: "Product B" },
  { id: '3', name: "Product C" },
  { id: '4', name: "Product D" },
];

app.post(
  "/addProduct",
  [
    body("name")
      .isLength({ min: 5 })
      .withMessage("Name must be at least 5 characters long"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let post = req.body;
    products.push(post);
    console.log(products);
    res.status(200).send(" Product added ");
  }
);

app.get("/getAllProducts", (req, res) => {
  res.send(products);
});

app.get("/getProduct/:id", (req, res) => {
  let productFound = false;
  products.forEach((element) => {
    if (element.id == req.params.id) {
      productFound = true;
      res.send(element);
    }
  });

  if (productFound !== true) {
    res.status(404).send(" Product with this id Not Found");
  }
});

app.put(
  "/editProduct/:id",
  body("name")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 5 characters long"),
  (req, res) => {
    let productFound = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    products.forEach((element) => {
      if (element.id == req.params.id) {
        productFound = true;
        element.name = req.body.name;
        console.log(products);
        res.send(element);
      }
    });

    if (productFound !== true) {
      res.status(404).send(" Product with this id Not Found");
    }
  }
);

app.delete("/deleteProduct/:id", (req, res) => {
  let idToDelete= req.params.id

  let updatedProducts = products.filter((product) => product.id !== idToDelete);

  if (updatedProducts.length !== products.length) {
    products = updatedProducts;
    console.log(products);
    res.status(200).send("Product deleted");
  } else {
    res.status(404).send("Product with this id Not Found");
  }
});

app.listen(3000, () => console.log("serverstarted"));
