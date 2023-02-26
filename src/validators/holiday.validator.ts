import { IHolidayInput } from '../interfaces/IHoliday';
import { z, ZodError } from 'zod';

export default (getHolidayDto: IHolidayInput) => {
    try {
        const schema = z.object({
            country_code: z
                .string()
                .length(2, {
                    message: 'Country code must be 2 characters long.',
                })
                .transform((val) => val.toUpperCase()),
            year: z
                .number({
                    invalid_type_error: 'Year must be a number.',
                    required_error: 'Year is required.',
                })
                .max(2049, { message: 'Year cannot be greater than 2049.' }),
            month: z
                .number({
                    invalid_type_error: 'Month must be a number.',
                })
                .min(1, { message: 'Month cannot be less than 1.' })
                .max(12, { message: 'Month cannot be greater than 12.' })
                .optional(),

            day: z
                .number({
                    invalid_type_error: 'Month must be a number.',
                })
                .min(1, { message: 'Day cannot be less than 1.' })
                .max(31, { message: 'Day cannot be greater than 31.' })
                .optional(),
        });
        return { value: schema.parse(getHolidayDto) };
    } catch (exception: any) {
        if (exception instanceof ZodError)
            return { error: { message: exception.issues[0].message } };

        throw exception;
    }
};
