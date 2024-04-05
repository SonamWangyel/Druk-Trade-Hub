import knex from '@/app/database'

const PAYMENT_METHODS = [`cc`, `mbob`, `cash`]
const TAX_RATE = 0.05

export async function GET(req) {
	const searchParams = req.nextUrl.searchParams;
	const userId = searchParams.get("users.id")
	var query = knex('payments')
	if (storeId) query = query.where('orders.id', userId)
	var result = await query.select('*')
	return Response.json({ data: result })
}

export async function POST(req) {
    const { paymentMethod, amount , userId} = await req.json()
    if  (!PAYMENT_METHODS.includes(paymentMethod)) 
        {return Response.badRequest(`Invalid Payment Method`)}
	

	return Response.json({ data: result })
}

const result = await knex('payments').insert({
    payment_method: paymentMethod,
    user_id : userId,
    amount,
}).returning('*')
