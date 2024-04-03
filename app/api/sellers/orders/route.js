import knex from '@/app/database'
export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const orderId = searchParams.get('order.id')
    const data = await (orderId === null ? knex ('orders').select('*') : knex('orders').where('order.id', orderId). join('user', 'orders.buyer_id', 'user.id'))
    return Response.json({data})
}
export async function POST(request) {
	const { buyer_id, product_id, quantity, total_price, status} = await request.json()

	try {
		const result = await knex('orders')
			.insert({
				buyer_id,
				product_id,
				quantity,
                total_price,
                status,

			})
			.returning('*')

		return Response.json({ data: result })
	} catch (e) {
		return new Response(e.detail || e.message, { status: 400 })
	}

}