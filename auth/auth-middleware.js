const bcrypt = require("bcryptjs");

const Users = require("../users/users-models");

module.exports = { restricted };
async function restricted(req, res, next) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    } else {
      const loggedUser = await Users.findUserBy({ username });
      req.user = loggedUser;
      if (req.user && bcrypt.compareSync(password, req.user.password)) {
        next();
      } else {
        res.status(401).json({ message: "Unauthorized! Please register" });
      }
    }
  } catch (error) {
    return res.status(400).json({ message: "Server error" });
  }
}
