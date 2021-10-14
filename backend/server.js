import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";

const app = express();
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/amazona");

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use("/api/users", userRouter);

// catch error inside router
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get("/api/products/:id", (req, res) => {
  const productById = data.products.find(
    (item) => item._id.toString() === req.params.id
  );
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
