/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('orders',(table)=>{  
         table.string('payment_method', 64).notNullable();
    }
    );    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.alterTable('orders',(table)=>{

        table.dropColumn('payment_method');
      
    })
};
