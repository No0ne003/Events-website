import { z } from "zod";

export const validationSchema = z.object({
  name: z.string({
    required_error: "Name is required.",
  }),
  headOffice: z.string({
    required_error: "head office is required",
  }),
  mobileNumber: z
    .string()
    .nonempty({ message: "Mobile number is required." })
    .transform((value) => Number(value))
    .refine((value) => !isNaN(value), {
      message: "Mobile number must be a valid number.",
    }),
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email(),
  message: z.string({
    required_error: "Message is required.",
  }),
});
