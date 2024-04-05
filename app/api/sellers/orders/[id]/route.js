import knex from '@/app/database'

export async function PUT(req,{params}) {
    const {id} = params;
    const{ buyerId, productId, quantity, total_price, status} = await req.json()
    const result = await knex('orders').where('id',id).update({
        buyer_id : buyerId,
        product_id:productId,
        quantity : quantity,
        total_price: total_price,
        status

    }).returning('*')
    return Response.json({data:result})
}
