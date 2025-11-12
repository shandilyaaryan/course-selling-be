import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .min(5, "Username must be atleast 5 characters")
    .max(12, "Username must not exceed 12 characters"),
  password: z.string().min(5, "Password must be 5 characters long"),
});

export type UserSchema = z.infer<typeof userSchema>;
