// const debug = require('debug')('app:countryCtrl');
// const Country = require('../models/countryModel');

// const countryCtrlFuncs = {
//     /**
//      * Fetches the list of supported countries.
//      * @returns {[Object]} Array of countries.
//      */
//     getAll: async () => {
//         try {
//             const countryList = await Country.aggregate([
//                 {
//                     $group: {
//                         _id: '$countryCode',
//                         countryCode: { $first: '$countryCode' },
//                         countryName: { $first: '$countryName' },
//                     },
//                 },
//                 {
//                     $sort: {
//                         _id: 1,
//                     },
//                 },
//                 {
//                     $project: {
//                         _id: 0,
//                     },
//                 },
//             ]).exec();
//             if (countryList.length == 0) throw new Error('No country data');

//             return countryList;
//         } catch (error) {
//             debug(error);
//             return error;
//         }
//     },

//     getOne: async (countryCode) => {
//         try {
//             if (typeof countryCode !== 'string')
//                 throw new Error('Invalid country code');

//             countryCode = countryCode.toUpperCase();
//             const country = await Country.findOne({ countryCode }).select([
//                 '-_id',
//                 'countryCode',
//                 'countryName',
//                 'timeZone'
//             ]);
//             if (!country) throw new Error('Country not supported');
            
//             return country;
//         } catch (error) {
//             return error;
//         }
//     },
// };

// module.exports = countryCtrlFuncs;
