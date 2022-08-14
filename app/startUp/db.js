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

    // const seedDB = async () => {
    //     await Country.deleteMany({});
    //     await Country.insertMany(seedData);
    // };

    // seedDB().then(() => {
    //     mongoose.connection.close();
    // });
}

module.exports = connectAndSeedDB;
