// const Joi = require('joi');

// function isIsoDate(dateTimeStr, helper) {
//     if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{1,3}[+--]{1}\d{2}:\d{2}/.test(dateTimeStr)) 
//         return helper.error('any.invalid');
        
//     const d = new Date(dateTimeStr);

//     return dateTimeStr;
// }

// function isGreaterThanNow(dateTimeStr, helper) {
//     const d = new Date(dateTimeStr).toISOString().split('T')[0];
    
//     if(d < new Date().toISOString().split('T')[0]) return helper.message('{#label} must be greater than "now"');

//     return true;
// }

// const validators = {
//     validateMeetTimes: (requestBody) => {
//         const schema = Joi.array()
//             .items(
//                 Joi.object({
//                     from: Joi.string()
//                              .custom(isIsoDate)
//                              .custom(isGreaterThanNow)
//                              .required(),

//                     to: Joi.string()
//                            .custom(isIsoDate)
//                            .custom(isGreaterThanNow)
//                            .required(),
                    
//                     country_code: Joi.string()
//                                      .length(2)
//                                      .required()
//                                      .pattern(/[A-Z]{2}/)
//                                      .messages({
//                                          'string.pattern.base':
//                                              'Country code mus be in uppercase',
//                                      }),
//                 })
//             ).min(2);

//         return schema.validate(requestBody);
//     },
// };

// module.exports = validators;
