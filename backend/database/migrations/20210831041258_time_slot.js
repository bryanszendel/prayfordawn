export function up(knex) {
  return knex.schema.createTable("time_slot", (slot) => {
    slot.increments();
    slot.string("person_name", 255).notNullable();
    slot.integer("hour").notNullable();
    slot.integer("minutes").notNullable();
    slot.timestamps(); // will create two columns: created_at, updated_at
  });
}

export function down(knex, Promise) {
  return knex.schema.dropTableIfExists("time_slot");
}
