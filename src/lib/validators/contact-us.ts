import { z } from "zod";

export const ContactUsValidator = z.object({
  name: z
    .string({ required_error: "Будь-ласка, вкажіть ваше ім'я." })
    .min(1, "Будь-ласка, вкажіть ваше ім'я."),
  phone: z
    .string({ required_error: "Будь ласка, вкажіть ваш телефон повністю." })
    .min(8, "Будь ласка, вкажіть ваш телефон повністю."),
  city: z.string().optional(),
  type: z.string().optional(),
  category: z.enum(["cargo", "garbage"], {
    required_error: "Будь ласка, оберіть тип перевезення.",
  }),
  message: z.string().optional(),
});

export type ContactUsSchema = z.infer<typeof ContactUsValidator>;
