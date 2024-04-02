import knex from '@/app/database'

export async function GET() {
	const data = await knex('categories').select('*')
	return Response.json({ data })
}

export async function POST(req) {
	const body = await req.json()
	const {name , description } = body;
	const data = await knex('categories').insert({
		name: name,
		description : description
	})
	return Response.json({ data })
}