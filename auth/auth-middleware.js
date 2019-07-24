const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");

const Users = require("../users/users-models");

module.exports = { authenticate, restricted };
async function authenticate(req, res, next) {
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

async function restricted(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (token) {
      jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ you: "Unauthorized!!!" });
        } else {
          req.decodedToken = decodedToken;
          next();
        }
      });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}
