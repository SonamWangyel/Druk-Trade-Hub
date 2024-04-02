import knex from '@/app/database'

export async function GET(req) {
    const { role } = req.query
    let data;
    if (role === 'buyer' || role === 'seller') {
        data = await knex('users')
            .where('role', '=', role);
    } else {
        return new Response("Invalid type parameter. Please specify 'buyer' or 'seller'", { status: 400 });
    }
    return new Response(JSON.stringify({ data }));
}

export async function PUT(req, { params }) {
	const body = await req.json()
	const { name , email , role } = body;
	const data = await knex('users').where('id', params.id).update({
		name,
		email,
		role
	})
	return Response.json({ data })
}
