// import knex from '@/app/database'
// import { pbkdf2Sync } from 'crypto';

// export async function POST(req) {
// 	const { firstname, lastname,email,password } = await req.json();

// // 	const [foundUser] = await knex('users')
// // 		.where('name', username)
// // 		.select('*');
// // console.log(foundUser)
// // 	if (!foundUser) {
// // 		return new Response('User not found', { status: 404 });
// // 	}

// 	const hashedPassword = pbkdf2Sync(password, foundUser.salt, 1000, 64, 'sha512').toString('hex');

// 	if (hashedPassword !== foundUser.hash) {
// 		return new Response("Bad login", { status: 400 })
// 	}

// 	return Response.json({ data: { 
//         firstname: foundUser.firstname,
//         lastname: foundUser.lastname,
//         email:foundUser.email,
//         password: foundUser.password 
//     },
//  });

//     }

import knex from '@/app/database';
import { pbkdf2Sync, randomBytes } from 'crypto';

export async function POST(req) {
    const { firstname, lastname, email,address, password } = await req.json();

    // Check if the user already exists
    const [existingUser] = await knex('users').where('email', email).select('*');

    // If user already exists, return error
    if (existingUser) {
        return new Response('User already exists', { status: 400 });
    }

    // Generate a salt
    const salt = randomBytes(16).toString('hex');

    // Hash the password with the salt
    const hashedPassword = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

    // Insert the user into the database
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
