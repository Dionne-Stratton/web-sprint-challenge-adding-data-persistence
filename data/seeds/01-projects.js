exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    {
      name: "project1",
      description: "testing",
      completed: 0,
    },
    {
      name: "project2",
      description: "testing",
      completed: 0,
    },
  ]);
};
