import knex from '@/app/database'

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const userId = searchParams.get('user_id')
	const data = await (userId === null ? knex ('users').select('*') : knex('users').where('user_id',userId).select('*') )
	return Response.json({ data })
}

export async function PUT(req, { params }) {
	const body = await req.json()
	const { firstname , lastname, email , address } = body;
	const data = await knex('users').where('id', params.id).update({
		firstname,
        lastname,
		email,
		address
	}).returning('*')
	return Response.json({ data: data })
}
