
exports.up = function(knex) {
  return knex.schema.createTable('recipe', (table) => {
      table.bigIncrements();
      table.string('title');
      table.string('description');

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipe');
};
