

import knex from '@/app/database';
import { pbkdf2Sync } from 'crypto';

export async function POST(req) {
    const { email, password } = await req.json();

    const [foundUser] = await knex('users')
        .where('email', email)
        .select('*');

    if (!foundUser) {
        return new Response('User not found', { status: 404 });
    }

    const hashedPassword = pbkdf2Sync(password, foundUser.salt, 1000, 64, 'sha512').toString('hex');

    if (hashedPassword !== foundUser.hashed_password) {
        return new Response("Bad login", { status: 400 });
    }

    return new Response(JSON.stringify({ 
        data: { 
            email: foundUser.email,
        
        }
    }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
