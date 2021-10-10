import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const productById = data.products.find((item) => item._id.toString() === req.params.id);
  if (!productById) {
    res.status(404).send({ message: "Product not found" });
  } else {
    res.send(productById);
  }
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
