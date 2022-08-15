require('dotenv').config();
require('express-async-errors');
require('./startUp/config')();
require('./startUp/db')();

const app = require('express')();
const config = require('config');
const appRoutes = require('./startUp/routes');

appRoutes(app);

const port = config.get('server.port');
const server = app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});


module.exports = server;