import dotenv from 'dotenv';
dotenv.config();

export const apiKey = process.env.API_KEY || '';
export const serverPort = process.env.Port;