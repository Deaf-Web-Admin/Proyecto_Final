const express = require("express");
const { login, register, supress, get } = require("../controllers/user.controller");
const { upload } = require("../../middlewares/files.middleware");

const UserRouter = express.Router();

UserRouter.post("/register", upload.single("avatar"), register);
UserRouter.post("/login", login);
UserRouter.post("/supress/:id", supress);
UserRouter.get("/", get);

module.exports = UserRouter;
