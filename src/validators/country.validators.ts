import { ICountryInput } from '../interfaces/ICountry';
import { z, ZodError } from 'zod';

class CountryValidator {
    private countryCodeSchema = z
        .string({
            required_error: 'Country code is required.',
            invalid_type_error: 'Country code must be a string.',
        })
        .length(2, {
            message: 'Country code can only be 2 characters long.',
        })
        .transform((val) => val.toUpperCase());

    private countryNameSchema = z.string({
        required_error: 'Country name is required.',
        invalid_type_error: 'Country name must be a string.',
    });

    private timezoneSchema = z.string({
        required_error: 'Timezone is required.',
        invalid_type_error: 'Timezone must be a string.',
    });

    private offsetSchema = z.string({
        required_error: 'Offset is required.',
        invalid_type_error: 'Offset must be a string.',
    });

    public validateNewCountryDto = (newCountryDto: ICountryInput) => {
        try {
            const schema = z.object({
                country_code: this.countryCodeSchema,
                country_name: this.countryNameSchema,
                timezone: this.timezoneSchema,
                offset: this.offsetSchema,
            });

            return { value: schema.parse(newCountryDto) };
        } catch (exception: any) {
            if (exception instanceof ZodError)
                return { error: { message: exception.issues[0].message } };

            throw exception;
        }
    };

    public validateUpdateCountryDto = (updateCountryDto: ICountryInput) => {
        try {
            if (Object.keys(updateCountryDto).length == 0)
                throw new ZodError([
                    {
                        code: 'custom',
                        path: [''],
                        fatal: false,
                        message: 'Object must contain at least one field.',
                    },
                ]);

            const schema = z.object({
                country_code: this.countryCodeSchema.optional(),
                country_name: this.countryNameSchema.optional(),
                timezone: this.timezoneSchema.optional(),
                offset: this.offsetSchema.optional(),
            });
            return { value: schema.parse(updateCountryDto) };
        } catch (exception: any) {
            if (exception instanceof ZodError)
                return { error: { message: exception.issues[0].message } };

            throw exception;
        }
    };
}

export default new CountryValidator();
