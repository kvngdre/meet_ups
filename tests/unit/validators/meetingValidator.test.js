const Joi = require('joi');
const { validateMeetTimes } = require('../../../validators/meetingValidator');

describe('validateMeetTImes', () => {
    it('should return an object with property error if input fails validation', () => {
        const requestBody = [
            {
                from: '2022-04-05',
                to: '2022-04-05',
                country_code: 'SG',
            },
            {
                from: '2022-10-01T09:00:00.0+01:00',
                to: '2022-04-05',
                country_code: 'Ng',
            },
        ];
        const result = validateMeetTimes(requestBody);

        expect(result).toHaveProperty('error.details');
    });

    it('should return an object with no error property if input passes validation', () => {
        const requestBody = [
            {
                from: '2022-10-01T09:00:00.0+01:00',
                to: '2022-10-01T17:00:00.0+01:00',
                country_code: 'NG',
            },
            {
                from: '2022-10-01T09:00:00.0+08:00',
                to: '2022-10-01T17:00:00.0+08:00',
                country_code: 'SG',
            },
        ]
        const result = validateMeetTimes(requestBody);
        
        expect(result).not.toHaveProperty('error');
    })
});
