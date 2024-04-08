import knex from '@/app/database'

const PAYMENT_METHODS = [`cc`, `mbob`, `cash`]

export async function GET(req) {
    try {
        const searchParams = new URL(req.url).searchParams
        const userId = searchParams.get("user_id")
        let query = knex('payments');

        if (userId) {
            query = query.where('user_id', userId)
        }

        const result = await query.select('*');

        return new Response(JSON.stringify({ data: result }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error(error); 
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

export async function POST(req) {
    try {
        const { paymentMethod, amount, userId } = await req.json();
        
        if (!PAYMENT_METHODS.includes(paymentMethod)) {
            return new Response(`Invalid Payment Method`, { status: 400 });
        }

        const result = await knex('payments').insert({
            payment_method: paymentMethod,
            amount: amount,
            user_id: userId
        }).returning('*');

        return new Response(JSON.stringify({ data: result }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error(error); 
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
