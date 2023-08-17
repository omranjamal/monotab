import z from 'zod';

export const schema = z.object({
    label: z.string(),
    include: z.string().array(),
    exclude: z.string().array()
});
