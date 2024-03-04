import mongoose, { Types } from 'mongoose';

const buyerSchema = mongoose.Schema(
  {
    userId: {
      type: Types.ObjectId,
    },
    shoulderWidth: {
      type: Number,
    },
    chestWidth: {
      type: Number,
    },
    belly: {
      type: Number,
    },
    waist: {
      type: Number,
    },
    hip: {
      type: Number,
    },
    armLength: {
      type: Number,
    },
    shoulderToWaist: {
      type: Number,
    },
    waistToKnee: {
      type: Number,
    },
    kneeToToe: {
      type: Number,
    },
  },
);


const buyer = mongoose.model('Buyer', buyerSchema);

export default buyer;