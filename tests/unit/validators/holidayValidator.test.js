const Joi = require('joi');
const { validateGetHoliday } = require('../../../validators/holidayValidator');

describe('validateGetHoliday', () => {
    it('should return an object with property error if input fails validation', () => {
        const requestBody = {
            country_code: 'NG',
            year: 2022,
            month: 13,
            day: 12
        };
        const result = validateGetHoliday(requestBody);

        expect(result).toHaveProperty('error.details');
    });

    it('should return an object with no error property if input passes validation', () => {
        const requestBody = {
            country_code: 'NG',
            year: 2022,
            month: 10,
            day: 12
        };
        const result = validateGetHoliday(requestBody);

        expect(result).not.toHaveProperty('error');
    })
});
