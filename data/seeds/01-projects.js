exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    {
      project_name: "project1",
      project_description: "testing",
      completed: 0,
    },
    {
      project_name: "project2",
      project_description: "testing",
      completed: 0,
    },
  ]);
};
