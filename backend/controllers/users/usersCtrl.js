const expressAsyncHandler = require("express-async-handler");
const User = require("../../model/user/User");

// Register user
const userRegisterCtrl = expressAsyncHandler(async (req, res) => {
  // check if user exist
  const userExists = await User.findOne({ email: req?.body?.email });

  if (userExists) throw new Error("User already exists");

  try {
    const user = await User.create({
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      password: req?.body?.password,
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

module.exports = { userRegisterCtrl };
