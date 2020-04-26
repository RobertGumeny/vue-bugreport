import mongoose from "mongoose";
const Schema = mongoose.Schema;


const Bug = new Schema(
  {
    closed: { type: Boolean, required: true, default: false },
    modifiedDate: { type: Date },
    title: { type: String, required: true },
    importance: { type: String, enum: ["High", "Medium", "Low"] },
    description: { type: String, required: true },
    creatorEmail: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Bug.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Bug;
