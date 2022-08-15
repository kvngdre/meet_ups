const config = require('config');
const mongoose = require('mongoose');
const seedData = require('./seed_data.json');
const Country = require('../models/countryModel');
const debug = require('debug')('app:startUp/db');

function connectAndSeedDB() {
    mongoose
        .connect(config.get('databaseURI'))
        .then(() => {
            debug('Connected to MongoDB');
        })
        .catch((err) => {
            debug(`Failed to connect to database ${err}`);
        });

    async () => {
        await Country.deleteMany({});
        await Country.insertMany(seedData);
    };

}

module.exports = connectAndSeedDB;
