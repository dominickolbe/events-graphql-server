import mongoose from "mongoose";

mongoose.set("useCreateIndex", true);
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

export const UserModel = mongoose.model("User", UserSchema);
