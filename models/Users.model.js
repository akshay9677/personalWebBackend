import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
});

export default mongoose.model("Users", usersSchema);
