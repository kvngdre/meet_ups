import 'express-async-errors';
import config from './config/config';
import express from 'express';
import loaders from './loaders/index';

const app = express();

loaders(app);

const port = config.port;
const server = app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

export default server;
