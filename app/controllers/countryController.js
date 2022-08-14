const debug = require('debug')('app:countryCtrl');
const Country = require('../models/countryModel');

const countryCtrlFuncs = {
    /**
     * Fetches the list of supported countries.
     * @returns {[Object]} Array of countries.
     */
    getAll: async () => {
        try {
            const countryList = await Country.aggregate([
                {
                    $group: {
                        _id: '$countryCode',
                        countryCode: { $first: '$countryCode' },
                        countryName: { $first: '$countryName' },
                    },
                },
                {
                    $sort: {
                        _id: 1,
                    },
                },
                {
                    $project: {
                        _id: 0,
                    },
                },
            ]).exec();
            if (countryList.length == 0) throw new Error('No country data');

            return countryList;
        } catch (error) {
            debug(error);
            return error;
        }
    },

    getOne: async (countryCode) => {
        try {
            const country = await Country.findOne({ countryCode }).select([
                'countryCode',
                'countryName',
            ]);
        } catch (error) {
            return error;
        }
    }
};

module.exports = countryCtrlFuncs;
