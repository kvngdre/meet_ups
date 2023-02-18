import * as z from 'zod';

export const ParamWithId = z.object({
    id: z
        .string({ invalid_type_error: 'ID must be a string.' })
        .min(1)
        .cuid({ message: 'Invalid ID.' }),
});

export type ParamWithId = z.infer<typeof ParamWithId>;
