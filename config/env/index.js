import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;

const env = {
    development : process.env.NODE_ENV === 'development'
};

const uri = process.env.MONGO_URI;
const secret_key = process.env.SECRET_KEY;

export { port, env, uri,secret_key};
