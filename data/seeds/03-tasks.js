exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    {
      description: "task1",
      notes: "testing",
      completed: 0,
      project_id: 1,
    },
    {
      description: "task2",
      notes: "testing",
      completed: 0,
      project_id: 2,
    },
  ]);
};
