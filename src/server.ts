import 'express-async-errors';
import config from './config/config.js';
import express, { Application } from 'express';
import loaders from './loaders/index.js';

const app: Application = express();

loaders(app);

const port = config.port;
const server = app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

export default server;
