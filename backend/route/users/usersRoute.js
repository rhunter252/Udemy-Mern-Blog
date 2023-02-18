const express = require("express");
const {
  userRegisterCtrl,
  loginCtrl,
  fetchUsersCtrl,
  deleteUsersCtrl,
  fetchUserDetailsCtrl,
  userProfileCtrl,
} = require("../../controllers/users/usersCtrl");
const authMiddleware = require("../../middlewares/auth/authMiddleware");

const userRoutes = express.Router();

userRoutes.post("/register", userRegisterCtrl);
userRoutes.post("/login", loginCtrl);
userRoutes.get("/", authMiddleware, fetchUsersCtrl);
userRoutes.delete("/:id", deleteUsersCtrl);
userRoutes.get("/:id", fetchUserDetailsCtrl);
userRoutes.get("/profile/:id", authMiddleware, userProfileCtrl);

module.exports = userRoutes;
