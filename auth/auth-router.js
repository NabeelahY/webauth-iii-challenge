const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("../users/users-models");
// const { restricted } = require("./auth-middleware");
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

module.exports = router;
