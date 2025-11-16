import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.email("Insira um e-mail válido"),
  subject: z.string().min(5, "O assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
