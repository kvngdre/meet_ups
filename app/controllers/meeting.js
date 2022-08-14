const { DateTime } = require('luxon');
const debug = require('debug')('app:meetingCtrl');
const countryCtrlFuncs = require('../controllers/countryController');


const meetingFuncs = {
    pickDateTime: async (users) => {
        try{
            let min = null;
            let max = null;
            let minOff = null;
            let minUTC = null;
    
            for (let user of users) {
                const { timeZone } = await countryCtrlFuncs.getOne(user.country_code)
                user.timeZone = timeZone
    
                user.from = DateTime.fromISO(user.from).setZone(timeZone)
    
                user.offset = user.from.offset
                user.from = user.from.toUTC()
                user.to = DateTime.fromISO(user.to).setZone(timeZone).toUTC()
    
                
                // user.offset = user.from.offset
            }

        }catch(error) {
            return error;
        }

    }
}