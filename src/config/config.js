import dotenv from 'dotenv';

const foundEnv = config();

if(foundEnv.error) 
    throw new Error('⚠ Could not find .env file.');


const configurations = {
    port: process.env.PORT
}

export default configurations;