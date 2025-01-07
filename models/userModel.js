import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,  //whitspace removed
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    answer: {
      type: String,
      required: true
    },
    role: {
      type: Number,
      default: 0,  //false 1= true
    },
  },
  { timestamps: true }  //new user create hota to uska teme dikhega
);
export default mongoose.model("users", userSchema);
