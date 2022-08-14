const { DateTime } = require('luxon');
const debug = require('debug')('app:meetingCtrl');
const holidayCtrlFuncs = require('../controllers/holidayController');
const countryCtrlFuncs = require('../controllers/countryController');

const meetingFuncs = {
    pickDateTime: async (users) => {
        try {
            let start = null;
            let maxMain = null;

            for (let user of users) {
                const { timeZone } = await countryCtrlFuncs.getOne(
                    user.country_code
                );

                user.timeZone = timeZone;
                user.from = DateTime.fromISO(user.from).setZone(timeZone);
                user.offset = user.from.offset;
                user.from = user.from.toUTC();
                user.to = DateTime.fromISO(user.to).setZone(timeZone).toUTC();
            }

            users.sort((a, b) => {
                return a.offset - b.offset;
            });

            // Getting the current hour of smallest timezone offset
            const hour = users[0].from.setZone(users[0].timeZone).hour

            // Setting the hour in UTC such that when converted back to local time it is 9am
            if(hour > 8 && hour < 15) {
                start = users[0].from
            }else if(hour < 9) {
                const diff = 9 - hour
                start = users[0].from.plus({hours: diff})
            }else {
                const diff = hour - 9
                start = users[0].from.minus({hours: diff})
            }

            /**
             * 
             * @param {String} start DateTIme
             * @param {Array} users 
             */
            async function findValidMeetingDateTime(start, users) {
                let isValid = false;

                // Find valid meeting time
                for(let i = 0; i <= 24; i++) {
                    // increment by an hour
                    start = start.plus({hours: 1})
                    for (let user of users) {
                        const hourInLocalTime = start.setZone(user.timeZone).hour
                        if(hourInLocalTime > 8 && hourInLocalTime < 17) {
                            isValid = true
                        }else{
                            isValid = false
                            break;
                        }
                        if(isValid) break;
                    }
                }
                if(!valid) return {err: 'No suitable time could be found'};

                
                const isHoliday = holidayCtrlFuncs.checkForHoliday(users)
                if(foundHoliday) {
                    for (let user of users) {
                        user.from = user.from.plus({days: 1})
                        user.to = user.from.plus({days: 1})
                    }

                }
                return start;
            }

            const
        } catch (error) {
            return error;
        }
    },
};
