import asyncHandler from "express-async-handler";
import item from "../models/itemModel.js";
import { Types } from "mongoose";

// @route   GET /api/items
const getAllItems = asyncHandler(async (req, res) => {
  const publisher = await item.find({});
  res.json(publisher);
});

// @route   POST /api/items
const createItem = asyncHandler(async (req, res) => {
  const item = {
    ...req.body,
    userId: new Types.ObjectId(req.body.userId),
  };

  const createdItem = await item.create(item);

  if (createdItem) {
    res.status(201).json(createdItem);
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
});

// @route   patch /api/items/:id
const updateItem = asyncHandler(async (req, res) => {
  const item = await item.findOne({ userId: req.params.id });
  if (item) {
    const reqBody = {
      ...req.body,
      userId: new Types.ObjectId(req.body.userId),
    };
    const data = { ...item, ...reqBody };
    const updatedItem = await item.findByIdAndUpdate(
      buyer._id,
      { $set: data },
      { new: true }
    );
    if (updatedItem) {
      res.status(201).json(updatedItem);
    } else {
      res.status(400);
      throw new Error("invalid data");
    }
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { createItem, getAllItems, updateItem };
