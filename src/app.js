import "@babel/polyfill";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./config/db";
import Users from "./models/Users.model";
import Likes from "./models/Likes.model";

dotenv.config({ path: "./src/config/config.env" });
connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/v1/users", async (req, res, next) => {
  try {
    const { name, email, description } = req.body;
    let params = {
      name: name,
      email: email,
      description: description,
    };
    const user = await Users.create(params);
    return res.status(200).json({
      data: "Added user to newsletter",
      error: null,
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message,
      data: null,
    });
  }
});

app.post("/api/v1/likes", async (req, res, next) => {
  try {
    const likeData = await Likes.find({ id: "#akshay.personal.web" });
    let { _id } = likeData[0];
    likeData[0].likes = likeData[0].likes + 1;
    likeData[0].sysModifiedTime = new Date().getTime();

    const like = await Likes.findOneAndUpdate({ _id: _id }, likeData[0]);

    return res.status(200).json({
      data: "Updated Likes",
      error: null,
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message,
      data: null,
    });
  }
});

app.get("/api/v1/likes", async (req, res, next) => {
  try {
    const likeData = await Likes.find({ id: "#akshay.personal.web" });

    return res.status(200).json({
      data: likeData,
      error: null,
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message,
      data: null,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
