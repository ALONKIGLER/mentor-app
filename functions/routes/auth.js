const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async function (req, res) {
    const token = await jwt.sign(
      {
        hello: "world",
        userId: req.user,
        blanla: "sdsd",
      },
      "secret string"
    );
    return res.send(token);
  }
);

router.post("/n", async function (req, res) {
  const query = { email: req.body.email };
  const result = await User.findOne(query);

  const hash_password = await hashPassword(req.body.password);

  const updatedUser = {
    ...req.body,
    password: hash_password,
  };

  if (result) {
    return res.status(400).json({
      message: "User already registered",
    });
  } else {
    const user = new User(updatedUser);
    await user.save();

    console.log("User saved successfully");
    const token = jwt.sign(
      {
        hello: "world",
        userId: user,
        blanla: "sdsd",
      },
      "secret string"
    );

    return res.send(token);
  }
});

module.exports = router;
