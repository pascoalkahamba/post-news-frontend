import { z } from "zod";

const schema = z.object({
  username: z
    .string()
    .min(6, "Nome do usuário deve ter mais de seis caracteres")
    .max(20, "Nome do usuário  não deve ter mais de vinte caracteres"),
  email: z.string().email("Digite um email válido"),
  password: z
    .string()
    .min(6, "Senha do usuário deve ter mais de seis caracteres"),
});

export default schema;
