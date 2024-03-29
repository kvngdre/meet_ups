import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV ?? 'development';

const foundEnv = dotenv.config();
if (foundEnv.error && process.env.NODE_ENV !== 'production')
    throw new Error('⚠ Could not find .env file.');

const configurations = {
    api: { prefix: '/api', version: '/v1' },
    port: process.env.PORT,
    holidayAPI: {
        url: process.env.API_URL,
        key: process.env.API_KEY,
    },
};

export default configurations;
