import'express-async-errors';

import config from './config/config.js';
import express, { Application } from 'express';

const app: Application = express();

const port = config.port;
const server = app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

module.exports = server;