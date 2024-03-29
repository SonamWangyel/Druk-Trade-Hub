// /**
//  */**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
exports.up = function(knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id').primary();
            table.string('name', 64).notNullable();
            table.string('email', 128).notNullable();
            table.string('role', 32).notNullable();
            table.timestamps(true, true);
        })
        .createTable('categories', (table) => {
            table.increments('id').primary();
            table.string('name', 64).notNullable();
            table.string('description', 2048).notNullable();
        })
        .createTable('products', (table) => {
            table.increments('id').primary();
            table.integer('seller_id').unsigned().notNullable().references('id').inTable('users');
            table.string('name', 64).notNullable();
            table.integer('category_id').unsigned().notNullable().references('id').inTable('categories');
            table.string('description', 2048).notNullable();
            table.decimal('price', 10, 2).notNullable(); 
            table.string('image_url').notNullable();
            table.timestamps(true, true);
        })
        
        .createTable('orders', (table) => {
            table.increments('id').primary();
            table.integer('buyer_id').unsigned().notNullable().references('id').inTable('users');
            table.integer('product_id').unsigned().notNullable().references('id').inTable('products');
            table.integer('quantity').notNullable(); 
            table.decimal('total_price', 10, 2).notNullable();
            table.string('status', 64).notNullable();
            table.timestamps(true, true);
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('orders')
        .dropTableIfExists('products')
        .dropTableIfExists('categories')
        .dropTableIfExists('users');
};