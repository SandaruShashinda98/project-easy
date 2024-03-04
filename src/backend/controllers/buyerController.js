import asyncHandler from "express-async-handler";
import Buyer from "../models/buyerModel.js";
import { Types } from "mongoose";

// @desc    Get all buyers
// @route   GET /api/buyers
const getSingleBuyer = asyncHandler(async (req, res) => {
  const buyer = await Buyer.findOne({ userId: req.params.id });
  if (buyer) {
    res.status(201).json(buyer);
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
});

// @desc    create new buyer
// @route   post /api/buyers
const createBuyer = asyncHandler(async (req, res) => {
  const buyer = {
    ...req.body,
    userId: new Types.ObjectId(req.body.userId),
  };
  const createdBuyer = await Buyer.create(buyer);
  if (createdBuyer) {
    res.status(201).json(createdBuyer);
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
});

// @desc    Update user profile
// @route   patch /api/buyers/:id
const updateBuyer = asyncHandler(async (req, res) => {
  const buyer = await Buyer.findOne({ userId: req.params.id });
  if (buyer) {
    const reqBody =  {
      ...req.body,
      userId: new Types.ObjectId(req.body.userId),
    };
    const data = { ...buyer, ...reqBody };
    const updatedUser = await Buyer.findByIdAndUpdate(
      buyer._id,
      { $set: data },
      { new: true }
    );
    if (updatedUser) {
      res.status(201).json(updatedUser);
    } else {
      res.status(400);
      throw new Error("invalid data");
    }
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { createBuyer, getSingleBuyer, updateBuyer };
