import { z } from "zod";

export const validationSchema = z.object({
  name: z.string({
    required_error: "Name is required.",
  }),
  headOffice: z.string({
    required_error: "head office is required",
  }),
  mobileNumber: z.number({
    required_error: "mobile number is required",
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
