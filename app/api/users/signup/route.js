
import knex from '@/app/database';
import { pbkdf2Sync, randomBytes } from 'crypto';

export async function POST(req) {
    const { firstname, lastname, email,address, password } = await req.json();
    const [existingUser] = await knex('users').where('email', email).select('*');
    
    if (existingUser) {
        return new Response('User already exists', { status: 400 });
    }

    const salt = randomBytes(16).toString('hex');

    
    const hashedPassword = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

    await knex('users').insert({
        firstname,
        lastname,
        email,
        address,
        hashed_password: hashedPassword,
        salt
    });

    return new Response('User created successfully', { status: 201 });
}
