import mongoose from "mongoose";

mongoose.set("useCreateIndex", true);
const EventSchema = new mongoose.Schema(
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

export const EventModel = mongoose.model("Event", EventSchema);
