
//  */
// exports.up = function(knex) {
//     return knex.schema
//     .alterTable('users', (table) => {
//         table.increments('id').primary();
//         table.string('name', 64).notNullable();
//         table.string('email', 128).notNullable();
//         table.string('address', 128).notNullable();
//         table.timestamps(true, true);
// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = function(knex) {
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .alterTable('users', (table) => {
        table.string('hashed_password', 128).notNullable(); 
        table.string('salt', 32).notNullable(); 

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .alterTable('users', (table) => {
        table.dropColumn('salt');
        table.dropColumn('hashed_password');
    });
};

