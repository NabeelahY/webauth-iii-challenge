const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("../auth/auth-router");
const userRouter = require("../users/users-route");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api", userRouter);
server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
