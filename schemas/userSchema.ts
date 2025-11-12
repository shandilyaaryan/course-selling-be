import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .min(4, "Username must be at least 4 characters long")
    .max(12, "Username cannot exceed 12 characters"),
  password: z.string().min(5, "Password must be at least 5 characters long"),
});

export type userInput = z.infer<typeof userSchema>;
