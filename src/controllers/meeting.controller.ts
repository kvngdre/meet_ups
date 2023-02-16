//     const { DateTime } = require('luxon');
// const debug = require('debug')('app:meetingCtrl');
// const checkForHoliday = require('../utils/checkForHoliday');
// const countryCtrlFuncs = require('../controllers/countryController');

// const meetingFuncs = {
//     pickDateTime: async (users) => {
//         try {
//             let minStartDateTIme = null;

//             for (let user of users) {
//                 const { timeZone } = await countryCtrlFuncs.getOne(
//                     user.country_code
//                 );
//                 user.timeZone = timeZone;

//                 user.from = DateTime.fromISO(user.from).setZone(user.timeZone);
//                 user.offset = user.from.offset;

//                 user.to = DateTime.fromISO(user.to)
//                     .setZone(user.timeZone)
//                     .toUTC();
//                 user.from = user.from.toUTC();
//             }

//             users.sort((a, b) => {
//                 return a.offset - b.offset;
//             });

//             const hour = users[0].from.setZone(users[0].timeZone).hour;

//             /* Find the dateTime in UTC such that when converted to local time of the user with the 
//             smallest offset the hour would be between 9:00am and 2:00pm */
//             if (hour > 8 && hour < 15) {
//                 minStartDateTIme = users[0].from;
//             } else if (hour < 9) {
//                 const diff = 9 - hour;
//                 minStartDateTIme = users[0].from.plus({ hours: diff });
//             } else {
//                 const diff = hour - 9;
//                 minStartDateTIme = users[0].from.minus({ hours: diff });
//             }

//             function findValidDateTIme(start, arr) {
//                 let valid = false;

//                 for (let i = 0; i <= 24; i++) {
//                     for (let u of arr) {
//                         // Find UTC time when converted to user local time is within 9am and 4pm
//                         const h = start.setZone(u.timeZone).hour;
//                         if (h > 8 && h < 17) {
//                             valid = true;
//                         } else {
//                             valid = false;
//                             break;
//                         }
//                     }
//                     if (valid) break;

//                     // increment start by an hour
//                     start = start.plus({ hours: 1 });
//                 }
//                 if (!valid) return { error: 'No suitable time' };

//                 return start;
//             }

//             let result = findValidDateTIme(minStartDateTIme, users);
//             if ('error' in result) return {result};

//             // Check if the suggested date for the meeting is a holiday in any of the countries.
//             meetDateTime = await checkForHoliday(result, users);
//             if(meetDateTime instanceof Error) throw new Error('Connection failed')

//             result = {
//                 from: meetDateTime,
//                 to: meetDateTime.plus({ hours: 2 }),
//             };

//             return {result};
//         } catch (error) {
//             debug(error);
//             return error;
//         }
//     },
// };

// module.exports = meetingFuncs;
