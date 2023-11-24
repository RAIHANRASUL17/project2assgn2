import { z } from 'zod';

const fullNameSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string(),
});

const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});
// main
const userZodSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: fullNameSchema,
  age: z.number(),
  email: z.string().email('email is need'),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: addressSchema,
});

export default userZodSchema;
