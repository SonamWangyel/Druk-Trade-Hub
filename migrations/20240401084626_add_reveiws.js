exports.up = function(knex) {
    return knex.schema
     .createTable('reviews', (table) => {
        table.increments('id').primary();
        table.integer('product_id').unsigned().notNullable().references('id').inTable('products');
        table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
        table.string('title', 128).notNullable();
        table.text('content').notNullable();
        table.integer('rating').notNullable();
        table.timestamps(true, true);
})};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('reviews')
};