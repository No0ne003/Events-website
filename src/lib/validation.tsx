import { z } from "zod";

const mobileNumberPattern = /^\d{10,15}$/;

export const validationSchema = z.object({
  name: z.string({
    required_error: "Name is required.",
  }),
  headOffice: z.string({
    required_error: "head office is required",
  }),
  mobileNumber: z
    .string({
      required_error: "Mobile number is required.",
    })
    .regex(
      mobileNumberPattern,
      "Mobile number must be between 10 and 15 digits",
    ),
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email(),
  message: z.string({
    required_error: "Message is required.",
  }),
});
