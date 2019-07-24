const express = require("express");
const Users = require("./users-models");
const { restricted } = require("../auth/auth-middleware");
const router = express.Router();

router.get("/users", restricted, async (req, res) => {
  try {
    const { department } = req.decodedToken;
    const users = await Users.findUserBy({ department });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("Cannot get users");
  }
});

module.exports = router;
