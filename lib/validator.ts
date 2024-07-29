import { z } from 'zod';

export const eventFormSchema = z.object({
  title: z.string().min(3, {
    message: 'Title must be at least 3 characters.',
  }),
  description: z
    .string()
    .min(5, {
      message: 'Description must be at least 5 characters.',
    })
    .max(500, 'Description must be equal or less than 500 characters.'),
  location: z
    .string()
    .min(3, 'Location must be at least 3 characters')
    .max(400, 'Location must be less than 400 characters'),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
