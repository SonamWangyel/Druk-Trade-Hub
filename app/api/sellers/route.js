import knex from '@/app/database'

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const userId = searchParams.get('user_id')
	const data = await (userId === null ? knex ('sellers').join('users', 'sellers.user_id', 'users.id').select('sellers.*', 'users.name') : knex('sellers').join('users', 'sellers.user_id', 'users.id').where('user_id', userId).select('sellers.*', 'users.name') )
	return Response.json({ data })
}


export async function POST(req) {
	const body = await req.json()
	const {storeName, storeLocation , userId} = body;
	const data = await knex('sellers').insert({
		company_name : storeName,
		location : storeLocation,
        user_id :userId
	})
	return Response.json({ data })
}