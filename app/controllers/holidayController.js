const axios = require('axios');
const config = require('config');
const debug = require('debug')('app:holidayCtrl');

const holidayCtrlFuncs = {
    /**
     * Get the holidays in specific date for a specific country
     * @param {String} country The country's country code.
     * @param {Number} year
     * @param {Number} month
     * @param {Number} day
     * @returns An array of holidays
     */
    getHolidays: async (country, year, month = '', day = '') => {
        try {
            const url = `https://calendarific.com/api/v2/holidays?&api_key=${config.get(
                'apiKey'
            )}&country=${country}&year=${year}&month=${month}&day=${day}`;

            const response = await axios.post(url);

            return response.data.response;
        } catch (error) {
            debug(error);
            return error;
        }
    }
};

module.exports = holidayCtrlFuncs;
