import 'dotenv/config';
import * as env from 'env-var';


// export const envs = {
//   PORT: env.get('PORT').required().asPortNumber(),
//   MAILER_SERVICE: env.get('MAILER_SERVICE').required().asString(),
//   MAILER_EMAIL: env.get('MAILER_EMAIL').required().asEmailString(),
//   MAILER_SECRET_KEY: env.get('MAILER_SECRET_KEY').required().asString(),
//   PROD: env.get('PROD').required().asBool(),

//   // Mongo DB
//   MONGO_URL: env.get('MONGO_URL').required().asString(),
//   MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
//   MONGO_USER: env.get('MONGO_USER').required().asString(),
//   MONGO_PASS: env.get('MONGO_PASS').required().asString(),

//   // Postgres
//   POSTGRES_URL: process.env.POSTGRES_URL,
//   POSTGRES_USER: process.env.POSTGRES_USER,
//   POSTGRES_DB: process.env.POSTGRES_DB,
//   POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
// }

export const envs = {
    PORT: process.env.PORT || '3000',
    MAILER_SERVICE: process.env.MAILER_SERVICE,
    MAILER_EMAIL: process.env.MAILER_EMAIL,
    MAILER_SECRET_KEY: process.env.MAILER_SECRET_KEY,
    PROD: process.env.PROD === 'true' || false,
 
    // MongoDB
    MONGO_URL: process.env.MONGO_URL,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
 
    // Postgres
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
};