exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("project_name", 128).notNullable();
      tbl.string("project_description", 1000);
      tbl.integer("completed").default(0);
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("resource_name", 128).notNullable().unique();
      tbl.string("resource_description", 128);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("task_description", 128).notNullable();
      tbl.string("task_notes", 128);
      tbl.integer("completed").default(0);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};