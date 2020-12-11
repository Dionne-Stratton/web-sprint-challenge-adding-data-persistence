exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    { name: "resource1", description: "testing" },
    { name: "resource2", description: "testing" },
  ]);
};
