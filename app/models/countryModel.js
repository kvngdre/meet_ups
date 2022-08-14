const mongoose = require('mongoose');

const schemaOptions = { timestamps: true };

const countrySchema = new mongoose.Schema(
    {
        countryCode: {
            type: String,
            trim: true,
            uppercase: true,
            required: true,
        },

        countryName: {
            type: String,
            trim: true,
            required: true,
        },

        timeZone: {
            type: String,
            trim: true,
            required: true,
        },

        offset: {
            type: String,
            required: true,
        },
    },
    schemaOptions
);

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
