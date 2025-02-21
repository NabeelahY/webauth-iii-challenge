const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");
const Users = require("../users/users-models");
const { authenticate } = require("./auth-middleware");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    let user = req.body;
    user.password = bcrypt.hashSync(req.body.password, 12);

    const newUser = await Users.addUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "User cannot be created" });
  }
});

router.post("/login", authenticate, async (req, res) => {
  try {
    const token = generateToken(req.user[0]);
    res.status(200).json({ message: `Welcome ${req.user[0].username}!`, token });
  } catch (error) {
    res.status(500).json("Cannot login");
  }
});

function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    department: user.department
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;
