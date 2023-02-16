const path = require('path');

module.exports = () => {
    process.env['NODE_CONFIG_DIR'] = path.resolve(__dirname, '../config');
    console.log(`working NODE_ENV: ${process.env['NODE_ENV']}`);
};
