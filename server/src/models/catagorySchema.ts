import mongoose from "mongoose";

const catagory = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnaile: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: true },
);

export const catagorySchema = mongoose.model("catagory", catagory);
