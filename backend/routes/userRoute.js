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
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
    } else {
      res.status(401).send({ message: "Invalid user or password" });
    }
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      isAdmin: req.body.isAdmin,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const userCreated = await user.save();
    res.send({
      _id: userCreated._id,
      name: userCreated.name,
      email: userCreated.email,
      isAdmin: userCreated.isAdmin,
      token: generateToken(userCreated),
    });
  })
);

export default userRouter;
