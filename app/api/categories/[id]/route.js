import knex from '@/app/database'

export async function PUT(req, { params }) {
	const body = await req.json()
	const { name, description } = body;
	const data = await knex('categories').where('id', params.id).update({
        name,
        description
	})
	return Response.json({ data })
}
