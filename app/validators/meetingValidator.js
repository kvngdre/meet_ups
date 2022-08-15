const Joi = require('joi');

const validators = {
    findMeetTime: (requestBody) => {
        const schema = Joi.array()
            .items(
                Joi.object({
                    from: Joi.date().greater('now').required(),
                    to: Joi.date().greater(Joi.ref('from')).required(),
                    country_code: Joi.string().required(),
                })
            )
            .min(2);

        return schema.validate(requestBody);
    },
};

module.exports = validators;
