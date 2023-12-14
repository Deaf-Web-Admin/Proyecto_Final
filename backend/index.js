const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const connect = require("./src/utils/db");
const { configCloudinary } = require("./src/middlewares/files.middleware");

const server = express();
connect();
configCloudinary();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

//Routes
const PostRouter = require("./src/api/routes/post.routes");
server.use("/posts", PostRouter);
const UserRouter = require("./src/api/routes/user.routes");
server.use("/users", UserRouter);

server.use("*", (req, res, next) => {
  return res.status(404).json("Ruta no encontrada");
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
