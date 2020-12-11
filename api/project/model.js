const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("projects").select("*");
  },
  getById(id) {
    return db("projects").where("id", id).first();
  },
  create(data) {
    return db("projects").insert(data);
  },
};
