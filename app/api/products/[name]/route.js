import knex from '@/app/database'

export async function GET (req,{params}){
    const productName = params.name 
    const {searchParams}=req.nextUrl
    const data = await knex('products')
            .where('name',productName)
            .select('*')
	return Response.json({ data })
}