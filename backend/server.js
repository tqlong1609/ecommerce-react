import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRouter.js";
import env from "dotenv";
import orderRouter from "./routes/orderRouter.js";

env.config(); // config environment .env file

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/amazona");

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
// catch error inside router
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
