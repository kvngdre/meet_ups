import * as z from 'zod';
import {} from '@prisma/client';

export const ParamWithId = z.object({
    id: z.string({ invalid_type_error: 'Invalid ID' }).min(1),
});

export type ParamWithId = z.infer<typeof ParamWithId>;
