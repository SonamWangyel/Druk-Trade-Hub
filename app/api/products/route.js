import knex from '@/app/database'

export async function GET (request){
    const searchParams = request.nextUrl.searchParams
	const categoryId = searchParams.get('category_id')
	const sellerId = searchParams.get('seller_id') 

	var query = knex('products')
		if (categoryId) query = query.where('category_id',categoryId)
		if (sellerId) query = query.where('seller_id', sellerId)
		if (sellerId  || categoryId === null) query = query.select('*')

	const data = await query.select('*')
	return Response.json({ data })
}

export async function  POST(req) {
	const body = await req.json()
	const { seller_id, productName,  category_id , description , price , image_url } = body;
	const data = await knex('products').insert({ 
		seller_id,	
		name : productName,
		category_id,
		description,
		price,
		image_url
	})
	return Response.json({data})
}
