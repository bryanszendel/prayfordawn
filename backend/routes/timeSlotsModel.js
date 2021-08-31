const db = require("../database/db-config.js");

module.exports = {
  find,
  findById,
  add,
  edit,
  remove,
};

function find() {
  return db("time_slot");
}

function findById(id) {
  return db("time_slot").where("id", id).first();
}

function add(item) {
  return db("time_slot").insert(item);
}

function edit(id, item) {
  return db("time_slot").update(item).where("id", id);
}

function remove(id) {
  return db("time_slot").del().where("id", id);
}
