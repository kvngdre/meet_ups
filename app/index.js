require('express-async-errors');
require('./startUp/config')();

const app = require('express')();
const config = require('config');
const appRoutes = require('./startUp/routes');

appRoutes(app);

const host = config.get('server.host');
const port = config.get('server.port');
app.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`);
});
