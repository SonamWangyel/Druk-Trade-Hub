import knex from '@/app/database'


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { buyer_id, product_id, quantity, status } = req.body;
        try {
            // Fetch product price from the database
            const { price } = await knex('products').where('id', product_id).first('price');
            const totalPrice = price * quantity;

            // Insert the order into the database
            const result = await knex('orders')
                .insert({
                    buyer_id,
                    product_id,
                    quantity,
                    total_price: totalPrice,
                    status,
                })
                .returning('*');

            res.status(201).json({ data: result });
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Failed to place order' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
