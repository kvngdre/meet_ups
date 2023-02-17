import * as z from 'zod';

export const validateNewCountryDto = z.object({
    country_code: z.string().length(2),
    country_name: z.string(),
    timezone: z.string(),
    offset: z.string(),
});
