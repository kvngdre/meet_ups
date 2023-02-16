const Joi = require('joi');

const validators = {
    validateGetHoliday: function (requestBody) {
        const schema = Joi.object({
            country_code: Joi.string()
                            .length(2)
                            .uppercase()
                            .required(),
            
            year: Joi.number()
                     .min(new Date().getFullYear())
                     .required(),

            month: Joi.number()
                      .min(1)
                      .max(12)
                      .optional(),
            
            day: Joi.number()
                    .min(1)
                    .max(31)
                    .optional()
        });

        return schema.validate(requestBody);
    },
};

module.exports = validators;
