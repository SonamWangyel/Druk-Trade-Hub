import knex from '@/app/database'

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const orderId = searchParams.get('orders.id')
    const data = await (orderId === null ? knex ('orders').join('products','orders.product_id', 'products.id').select('orders.*', 'products.name') : knex('orders').where('orders.id', orderId).join('products','orders.product_id', 'products.id').select('orders.*', 'products.name'))
    return Response.json({data})
}
export async function POST(request) {
	const { buyer_id, product_id, quantity, status} = await request.json()
	var { price } = await knex('products').where('id', product_id).first('price')
	const totalPrice = price * quantity
	try {
		const result = await knex('orders')
			.insert({
				buyer_id ,
				product_id,
				quantity,
				total_price : totalPrice,
				status,

			})
			.returning('*')

		return Response.json({ data: result })
	} catch (e) {
		return new Response(e.detail || e.message, { status: 400 })
	}

	}