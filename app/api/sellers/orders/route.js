import knex from '@/app/database'

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const orderId = searchParams.get('orders.id')
    const data = await (knex('orders')
		.where('orders.id', orderId)
		.join('products','orders.product_id', 'products.id')
		.select('orders.*', 'products.name'))
    return Response.json({data})
}

export async function POST(request) {
	const { buyerId, productId, quantity, status,paymentMethod,totalPrice} = await request.json()
	// var { price } = await knex('products').where('id', product_id).first('price')
	// const totalPrice = price * quantity
	try {
		const data = await knex('orders')
			.insert({
				buyer_id :buyerId,
				product_id :productId,
				quantity,
				total_price : totalPrice,
				status,
				payment_method:paymentMethod,

			})
		return Response.json({ data })
	} catch (e) {
		return new Response(e.detail || e.message, { status: 400 })
	}

	}