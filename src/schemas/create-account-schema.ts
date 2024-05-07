import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(6, "O nome do usuário deve ter mais de seis caracteres")
    .max(20, "O nome do usuário  não deve ter mais de vinte caracteres"),
  email: z.string().email("Digite um email válido"),
  password: z
    .string()
    .min(6, "A senha do usuário deve ter mais de seis caracteres"),
});

export default schema;
