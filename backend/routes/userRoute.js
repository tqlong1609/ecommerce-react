import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";

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

export default userRouter;
