import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  email: { type: String, required: [true, "Email is required"] },
  subject: { type: String, required: [true, "Subject is required"] },
  post: { type: Object, required: [true, "Post is required"] },
  sysCreatedTime: Number,
  likes: Number,
  tags: Array,
});

export default mongoose.model("Blog", BlogSchema);
