import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  likes: { type: Number, required: [true, "Likes is required"] },
  sysModifiedTime: Number,
  id: String,
});

export default mongoose.model("Likes", likeSchema);
