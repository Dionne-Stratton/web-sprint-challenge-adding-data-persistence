const db = require("../../data/dbConfig");

module.exports = {
  getResource() {
    return db("resources").select("*");
  },
  getById(id) {
    return db("resources").where("id", id).first();
  },
  create(data) {
    return db("resources").insert(data);
  },
};
