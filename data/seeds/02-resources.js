exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    { resource_name: "resource1", resource_description: "testing" },
    { resource_name: "resource2", resource_description: "testing" },
    { resource_name: "resource3", resource_description: "testing" },
  ]);
};