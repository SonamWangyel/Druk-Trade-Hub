/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
        return knex.schema.alterTable('users', function(table) {
            table.string('firstname', 64).notNullable(); 
            table.string('lastname', 64).notNullable();
            table.dropColumn('name')
        });
    };
    
    exports.down = function(knex) {
        return knex.schema.alterTable('users', function(table) {
            table.string('name', 64).notNullable();
            table.dropColumn('firstname');
            table.dropColumn('lastname');
            
        });
    };
    

