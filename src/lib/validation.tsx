import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  mobileNumber: z.string().regex(/^\d+$/, "Invalid mobile number"),
  headOffice: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});
