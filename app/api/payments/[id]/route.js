import knex from '@/app/database'

const PAYMENT_METHODS = [`cc`, `mbob`, `cash`]

export async function GET(req, { params }) {
    const { id } = params;
    const result = await knex('payments')
        .where('payments.id', id)
        .join('users', 'payments.user_id', 'users.id')
        .select('payments.*', 'users.firstname', 'users.lastname');

    if (result.length === 0) {
        return new Response(`Bill not found with id "${id}"`, { status: 404 });
    }

    return new Response(JSON.stringify({ data: result }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}


export async function PUT(req, { params }) {
	const { id } = params;
	const {
		paymentMethod,
		amount,
        userId,
	} = await req.json()

	if (paymentMethod && !PAYMENT_METHODS.includes(paymentMethod)) {
		return new Response(`Bad Request: Payment method must be one of [${PAYMENT_METHODS.join(`, `)}]`, { status: 400 })
	}


	const result = await knex('payments').where('id', id).update({
		payment_method: paymentMethod,
        amount : amount,
        user_id : userId,
        updated_at : knex.fn.now()
		
	}).returning('*')

	return Response.json({ data: result })
}
