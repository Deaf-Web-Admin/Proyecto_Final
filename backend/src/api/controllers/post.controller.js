const Post = require("../models/post.model");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    return res.status(200).json(posts);
  } catch (error) {
    return next(new Error("Posts not found"));
  }
};


const createPost = async (req, res, next) => {
  try {
    const newPost = new Post({
      ...req.body,
      cover: req.file
        ? req.file.path
        : "https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif",
    });

    await newPost.save();
    return res.status(201).json(newPost);
  } catch (error) {
    return next(new Error("Post cannot be created"));
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const actualPost = await Post.findById(id);
    deleteImgCloudinary(actualMovie.cover);
    await Post.findByIdAndDelete(id);
    return res.status(200).json("Deleted post");
  } catch (error) {
    return next(new Error("Post cannot be deleted"));
  }
};



module.exports = {
  getAllPosts,
  createPost,
  deletePost,
};
