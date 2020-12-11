const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("tasks").select("*");
  },
  getById(id) {
    return db("tasks").where("id", id).first();
  },
  create(data) {
    return db("tasks").insert(data);
  },
};
