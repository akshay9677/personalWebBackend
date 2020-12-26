import "@babel/polyfill";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./config/db";
import Users from "./models/Users.model";
import Likes from "./models/Likes.model";
import Blog from "./models/Blog.model";

dotenv.config({ path: "./src/config/config.env" });
connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
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

app.get("/api/v1/blog", async (req, res, next) => {
  try {
    const blogPosts = await Blog.find();

    return res.status(200).json({
      data: blogPosts,
      error: null,
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message,
      data: null,
    });
  }
});

app.post("/api/v1/blog", async (req, res, next) => {
  try {
    let { email, subject, post, tags } = req.body;

    let newPost = { email, subject, post, tags };
    newPost.sysCreatedTime = new Date().getTime();
    newPost.likes = 0;
    newPost.tags = newPost.tags ? newPost.tags : [];

    await Blog.create(newPost);

    return res.status(200).json({
      data: newPost,
      error: null,
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message,
      data: null,
    });
  }
});

app.post("/api/v1/blog/summary", async (req, res, next) => {
  try {
    let { _id } = req.body;
    const blogPost = await Blog.find({ _id: _id });

    return res.status(200).json({
      data: blogPost[0],
      error: null,
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message,
      data: null,
    });
  }
});

app.put("/api/v1/blog/like", async (req, res) => {
  try {
    let blog = req.body;
    const { _id } = blog;
    blog.likes += 1;
    let editPost = await Blog.findOneAndUpdate({ _id: _id }, blog);
    return res.status(200).json({
      data: blog,
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
