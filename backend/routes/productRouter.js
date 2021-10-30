import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const getAllProducts = await Product.find({});
    res.send(getAllProducts);
  })
);


productRouter.get(
  '/featured',
  expressAsyncHandler(async (req, res) => {
    const getAllProducts = await Product.find({});
    const featuredProducts = getAllProducts.sort((a, b) => b.numReviewer - a.numReviewer)
    res.send(featuredProducts);
  })
);

productRouter.get(
  '/latest',
  expressAsyncHandler(async (req, res) => {
    const getAllProducts = await Product.find({});
    const latestProducts = getAllProducts.sort((a, b) => b.time - a.time)
    res.send(latestProducts);
  })
);


productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Product.remove({});
    const createdProduct = await Product.insertMany(data.products);
    res.send(createdProduct);
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const productById = await Product.findById(req.params.id);
    if (productById) {
      res.send(productById);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
