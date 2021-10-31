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
const connection = "mongodb+srv://dbUser:123@cluster0.gffgt.mongodb.net/test?retryWrites=true&w=majority";
// mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona");
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", async (req, res) => {
  if (process.env.PAYPAL_CLIENT_API) {
    res.send(process.env.PAYPAL_CLIENT_API);
  } else {
    res.status(401).send({ message: "Not Found Paypal Client ID" });
  }
});
// catch error inside router
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
