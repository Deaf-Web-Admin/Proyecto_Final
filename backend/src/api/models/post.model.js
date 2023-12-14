const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, trim: true },
    categoria: { type: String, required: true, trim: true },
    contenido: { type: String, required: true, trim: true },
    cover: { type: String, required: true },
    contacto: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
