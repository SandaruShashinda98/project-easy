import mongoose, { Types } from 'mongoose';

const itemSchema = mongoose.Schema(
  {
    userId: {
      type: Types.ObjectId,
    },
    brand: {
      type: String
    },

    //product
    gender:{
      type: String, //MALE or FEMALE
    },
    description:{
      type: String
    },
    availableCount: {
      type: Number,
    },
    imageUrl: {
      type: String
    },

    //body measurements
    bodyArea:{
      type: String
    },
    armLength: {
      type: Number,
    },
    belly: {
      type: Number,
    },
    chestWidth: {
      type: Number,
    },
    hip: {
      type: Number,
    },
    kneeToToe: {
      type: Number,
    },
    shoulderToWaist: {
      type: Number,
    },
    shoulderWidth: {
      type: Number,
    },
    waist: {
      type: Number,
    },
    waistToKnee: {
      type: Number,
    },

    bodyType: {
      type: String //from ML
    },
  },
);


const item = mongoose.model('Item', itemSchema);

export default item;