const db = require("../database/dbConfig.js");

module.exports = {
  addUser,
  findUserBy
};
function addUser(user) {
  return db("users")
    .insert(user)
    .then(([id]) => getUserById(id));
}

function findUserBy(filter) {
  return db("users")
    .where(filter)
    .first();
}

function getUserById(id) {
  return db("users")
    .where({ id })
    .first();
}
