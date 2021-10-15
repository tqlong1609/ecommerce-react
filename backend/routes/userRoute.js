import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

// expressAsyncHandler: throw error when router have issue
userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove({}); //remove all user
    const createUsers = await User.insertMany(data.user);
    res.send({ createUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user),
      });
    } else {
      res.status(401).send({ message: "Invalid user or password" });
    }
  })
);

export default userRouter;
