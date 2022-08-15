const config = require('config');
const mongoose = require('mongoose');
const debug = require('debug')('app:startUp/db');

function connectAndSeedDB() {
    let db;
    if(process.env['NODE_ENV'] === 'test') db = config.get('testDatabaseURI')
    else db = config.get('databaseURI')
    
    mongoose
        .connect(db)
        .then(() => {
            debug('Connected to MongoDB');
        })
        .catch((err) => {
            debug(`Failed to connect to database ${err}`);
        });
}

module.exports = connectAndSeedDB;
