const express = require("express");
const {
  getAllPosts,
  createPost,
  deletePost,
} = require("../controllers/post.controller");
const { upload } = require("../../middlewares/files.middleware");
const isAuth = require("../../middlewares/auth.middleware");

const PostRouter = express.Router();

PostRouter.get("/", getAllPosts);
PostRouter.post("/", [isAuth], upload.single("cover"), createPost);
PostRouter.post("/supress/:id",  deletePost);

module.exports = PostRouter;
