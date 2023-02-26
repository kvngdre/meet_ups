import { z, ZodError } from 'zod';
import { DateTime } from 'luxon';

class MeetupValidators {
    private datetimeSchema;
    private countryCodeSchema;

    constructor() {
        this.datetimeSchema = z
            .string({
                invalid_type_error: 'From must be a string.',
                required_error: 'From is required.',
            })
            .superRefine((val, ctx) => {
                const ISODateTimeRegEx =
                    /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{1,3}[+--]{1}\d{2}:\d{2}/;
                if (!ISODateTimeRegEx.test(val)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.invalid_date,
                        message:
                            'From must be a valid ISO format datetime string.',
                    });
                }
            })
            .transform((val) => DateTime.fromISO(val));

        this.countryCodeSchema = z
            .string({
                invalid_type_error: 'CC must be a string.',
                required_error: 'CC is required.',
            })
            .length(2, { message: 'CC must two characters long.' })
            .transform((val) => val.toUpperCase());
    }
    validateMeetUpInput = (meetupDto: any) => {
        try {
            const schema = z.object({
                users: z.array(
                    z.object({
                        from: this.datetimeSchema,
                        to: this.datetimeSchema,
                        CC: this.countryCodeSchema,
                    })
                ).min(2),
            });

            return { value: schema.parse(meetupDto) };
        } catch (exception) {
            if (exception instanceof ZodError)
                return { error: { message: exception.issues[0].message } };

            throw exception;
        }
    };
}

export default new MeetupValidators();
