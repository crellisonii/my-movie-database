import dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/.env` });

export const apiKey = process.env.API_KEY || '';
export const serverPort = process.env.Port;